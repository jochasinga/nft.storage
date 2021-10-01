import * as ERC721 from '../gen/erc721/index.js'
import * as Hasura from './hasura.js'

import { setTimeout } from 'timers/promises'

/* Note:
    this is still a timeb-xed "spike"
    not ready for review
    Will be refactored into existing config/typing patterns
*/

/* Abstract to the config */
const SCRAPE_BATCH_SIZE = 50
const MAX_INBOX_SIZE = 1000
const SUBGRAPH_URL = `https://api.thegraph.com/subgraphs/name/nftstorage/eip721-subgraph`

const HASURA_CONFIG = {
  url: new URL(`http://localhost:8080/v1/graphql`),
  headers: {
    'x-hasura-admin-secret': process.env['HASURA_KEY'] || 'foo',
  },
}

//todo: make this a stream
let importInbox = []

const ERC721_QUERYARGS = {
  url: new URL(SUBGRAPH_URL),
}

const ERC721_RESULT_DEFINITON = {
  id: 1,
  tokenID: 1,
  tokenURI: 1,
  mintTime: 1,
  blockNumber: 1,
  blockHash: 1,
  contract: {
    id: 1,
    name: 1,
    symbol: 1,
    supportsEIP721Metadata: 1,
  },
  owner: {
    id: 1,
  },
}

const nextQuery = () => {
  const query = {
    first: SCRAPE_BATCH_SIZE,
    where: { tokenURI_not: '', id_gt: lastScrapeId() },
  }
  return {
    tokens: [query, ERC721_RESULT_DEFINITON],
  }
}

//This needs to initialize with the current cursor
let _lastScrapeId = 0
const lastScrapeId = (id) => {
  if (id) {
    _lastScrapeId = id
  }

  //you're starting over from scratch
  if (lastScrapeId == 0 || id == 0) {
    //actually go get the lat id from the database
    //let _lastScrapeId = await (db, sort by time stamp extract id)
    //or its zero, the first time ever.
  }

  return _lastScrapeId
}

async function fetchNextNFTBatch() {
  const nftResults = await ERC721.query(ERC721_QUERYARGS, nextQuery())
  //Ok { ok: true, value: { tokens: [ [Object] ] }, done: true }

  const lastId = nftResults.value.tokens.map((nft) => nft.id)[
    nftResults.value.tokens.length - 1
  ]
  //setId
  lastScrapeId(lastId)
  return nftResults
}

async function writeScrapedRecord(erc721Import) {
  return Hasura.mutation(HASURA_CONFIG, {
    insert_erc721_import_one: [
      {
        object: {
          id: erc721Import.id,
          next_id: erc721Import.id,
        },
        on_conflict: {
          constraint: Hasura.schema.erc721_import_constraint.erc721_import_pkey,
          update_columns: [],
        },
      },
      {
        id: true,
      },
    ],
  })
}

let _draining = false
async function drainInbox() {
  if (importInbox.length > 0) {
    _draining = true
    const nextImport = { ...importInbox[importInbox.length - 1] }
    console.log(`writing: ${nextImport.id}`)
    try {
      await writeScrapedRecord(nextImport)
      importInbox.pop()
    } catch (err) {
      console.log(err)
      return false
    }
  } else {
    _draining = false
    await setTimeout(500)
  }

  console.log(`Inbox at: ${importInbox.length}`)
  return drainInbox()
}

async function scrapeBlockChain() {
  if (importInbox.length < MAX_INBOX_SIZE) {
    let scrape = []
    try {
      scrape = await fetchNextNFTBatch()
      importInbox = [...importInbox, ...scrape.value.tokens]
    } catch (err) {
      console.log(err)
      return false
    }
    console.log(`Inbox at ${importInbox.length}`)
    await setTimeout(10)
  } else {
    if (!_draining) {
      console.log('Start Drain.')
      drainInbox()
      //this is going to be a stream, but until then
    }
    await setTimeout(500)
  }
  return scrapeBlockChain()
}

//will be spawn
scrapeBlockChain()