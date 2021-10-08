# Changelog

## 1.0.0 (2021-10-08)


### Features

* adds constraints to handle edge cases in migration scripts ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* adds docker images for postgres and hasura ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* adds sql provision script in the database_v2 package ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* generalized migration script, and independent migrations per-entity ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* niftysave abstraction for uri_hash ([#482](https://www.github.com/ipfs-shipyard/nft.storage/issues/482)) ([8ef4965](https://www.github.com/ipfs-shipyard/nft.storage/commit/8ef4965b00696f03f92958fd3eec829f00e6b702))
* niftysave postgres migration ([#442](https://www.github.com/ipfs-shipyard/nft.storage/issues/442)) ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* postgres backend for niftysave ([4ad6035](https://www.github.com/ipfs-shipyard/nft.storage/commit/4ad6035916170fdbb0588ce5e855e4d048795cf8))
* rewire niftysave analyzer ([#517](https://www.github.com/ipfs-shipyard/nft.storage/issues/517)) ([b6b908d](https://www.github.com/ipfs-shipyard/nft.storage/commit/b6b908d80acb5bb18efa9e6bbea445b3bb30e1a4))
* table provisioning script via hasura migrations ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))


### Bug Fixes

* change niftysave schema to use uri hashes as primary keys ([#476](https://www.github.com/ipfs-shipyard/nft.storage/issues/476)) ([b501171](https://www.github.com/ipfs-shipyard/nft.storage/commit/b501171c3cd0292ee397605497e069a324cae8ca))
* implement schema changes to match nft.storage tables ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* use immutable pgcrypto digest ([#480](https://www.github.com/ipfs-shipyard/nft.storage/issues/480)) ([1daad10](https://www.github.com/ipfs-shipyard/nft.storage/commit/1daad1084d30da527b61c27d0ea8e99eb6eaf5b8))


### Changes

* better comments and types for migration ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* regenerates all generated files to type migrations ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
