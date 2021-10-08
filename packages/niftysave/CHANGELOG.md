# Changelog

## [1.1.0](https://www.github.com/ipfs-shipyard/nft.storage/compare/niftysave-v1.0.0...niftysave-v1.1.0) (2021-10-08)


### Features

* add exponentian backoff to mitigate ratelimits  ([#462](https://www.github.com/ipfs-shipyard/nft.storage/issues/462)) ([94ba93c](https://www.github.com/ipfs-shipyard/nft.storage/commit/94ba93cf72da35e323e363d793c0cf9d1d19d9db))
* adds constraints to handle edge cases in migration scripts ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* adds docker images for postgres and hasura ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* adds sql provision script in the database_v2 package ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* enable niftysave ([#256](https://www.github.com/ipfs-shipyard/nft.storage/issues/256)) ([b93614e](https://www.github.com/ipfs-shipyard/nft.storage/commit/b93614ece6806611addea215726ff43f5f7f98bc))
* generalized migration script, and independent migrations per-entity ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* niftysave abstraction for uri_hash ([#482](https://www.github.com/ipfs-shipyard/nft.storage/issues/482)) ([8ef4965](https://www.github.com/ipfs-shipyard/nft.storage/commit/8ef4965b00696f03f92958fd3eec829f00e6b702))
* niftysave postgres migration ([#442](https://www.github.com/ipfs-shipyard/nft.storage/issues/442)) ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* remove custom multipart parser ([#336](https://www.github.com/ipfs-shipyard/nft.storage/issues/336)) ([029e71a](https://www.github.com/ipfs-shipyard/nft.storage/commit/029e71aefc1b152a080ffb5739e4f7c2565a1e57))
* rewire niftysave analyzer ([#517](https://www.github.com/ipfs-shipyard/nft.storage/issues/517)) ([b6b908d](https://www.github.com/ipfs-shipyard/nft.storage/commit/b6b908d80acb5bb18efa9e6bbea445b3bb30e1a4))
* table provisioning script via hasura migrations ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))


### Bug Fixes

* analyzer by switching from index to collections ([d581d9e](https://www.github.com/ipfs-shipyard/nft.storage/commit/d581d9e410769342f7cb40808b414888207d07c3))
* erc721-import migration ([#501](https://www.github.com/ipfs-shipyard/nft.storage/issues/501)) ([ae6cb99](https://www.github.com/ipfs-shipyard/nft.storage/commit/ae6cb995b7356f60696b47e05a847b05f1a3739a))
* failing dep installs ([#530](https://www.github.com/ipfs-shipyard/nft.storage/issues/530)) ([1da2c45](https://www.github.com/ipfs-shipyard/nft.storage/commit/1da2c455f3fe1d3278c252dc47921b43789df68c))
* implement schema changes to match nft.storage tables ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* nft-asset migration ([#499](https://www.github.com/ipfs-shipyard/nft.storage/issues/499)) ([8692432](https://www.github.com/ipfs-shipyard/nft.storage/commit/86924324c8215eef3a8799d1c1d740a6a919acd1))
* niftysave duplicate erc721 import migration ([#502](https://www.github.com/ipfs-shipyard/nft.storage/issues/502)) ([4a2e22c](https://www.github.com/ipfs-shipyard/nft.storage/commit/4a2e22ca7f7528c9176888f251a27e8c1fb55151))
* niftysave pin job failures by adopting request timeouts ([#267](https://www.github.com/ipfs-shipyard/nft.storage/issues/267)) ([0bac638](https://www.github.com/ipfs-shipyard/nft.storage/commit/0bac6385ef0417a7a3453172bf3a3ed9e664f9e6))
* resource migration ([#500](https://www.github.com/ipfs-shipyard/nft.storage/issues/500)) ([42ceea8](https://www.github.com/ipfs-shipyard/nft.storage/commit/42ceea80041eafe2f67d91805ec32242d01e63b7))
* switch niftysave analyzer to pull from new queue endpoint ([#369](https://www.github.com/ipfs-shipyard/nft.storage/issues/369)) ([98bf9c7](https://www.github.com/ipfs-shipyard/nft.storage/commit/98bf9c726b90001fe959f141b0f0e66f878b8a31))
* unblock niftysave ([#257](https://www.github.com/ipfs-shipyard/nft.storage/issues/257)) ([7fc56bd](https://www.github.com/ipfs-shipyard/nft.storage/commit/7fc56bdfbbbbe6a59a1ff7df9a42c81aad100635))


### Changes

* better comments and types for migration ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))
* improve niftysave migration error reporting ([#467](https://www.github.com/ipfs-shipyard/nft.storage/issues/467)) ([2bbc394](https://www.github.com/ipfs-shipyard/nft.storage/commit/2bbc394dc94a13473c55dd15b1530ca96ca6bbe2))
* regenerates all generated files to type migrations ([161e37b](https://www.github.com/ipfs-shipyard/nft.storage/commit/161e37b5f615e3db238a20d1edda3c779ac658b5))

## 1.0.0 (2021-07-13)


### Features

* enable niftysave ([#238](https://www.github.com/ipfs-shipyard/nft.storage/issues/238)) ([61a30ef](https://www.github.com/ipfs-shipyard/nft.storage/commit/61a30efea3879ec38ba97d0e5b4d300182b50908))
* improvements to the setup ([#246](https://www.github.com/ipfs-shipyard/nft.storage/issues/246)) ([6a2501f](https://www.github.com/ipfs-shipyard/nft.storage/commit/6a2501f5c340af87c1571886961920280afec249))
* migrate niftysave ([#229](https://www.github.com/ipfs-shipyard/nft.storage/issues/229)) ([98d83ea](https://www.github.com/ipfs-shipyard/nft.storage/commit/98d83ea00a26363632ddaa33ab632831218f5a1e))
* update pw-test so its easier to run sw tests ([#240](https://www.github.com/ipfs-shipyard/nft.storage/issues/240)) ([5737ffc](https://www.github.com/ipfs-shipyard/nft.storage/commit/5737ffcb0323e20b31fdabdd305da075b92a9047))
