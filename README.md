<!--
N.B.: This README was automatically generated by <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
It shall NOT be edited by hand.
-->

# Audiobookshelf for YunoHost

[![Integration level](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Working status](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Maintenance status](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Install Audiobookshelf with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Read this README in other languages.](./ALL_README.md)*

> *This package allows you to install Audiobookshelf quickly and simply on a YunoHost server.*  
> *If you don't have YunoHost, please consult [the guide](https://yunohost.org/install) to learn how to install it.*

## Overview

Audiobookshelf is a self-hosted audiobook server for managing and playing your audiobooks.

### Features

* Fully **open-source**, including the [android & iOS app](https://github.com/advplyr/audiobookshelf-app) *(in beta)*
* Stream all audiobook formats on the fly
* Multi-user support w/ custom permissions
* Keeps progress per user and syncs across devices
* Auto-detects library updates, no need to re-scan
* Upload audiobooks w/ bulk upload drag and drop folders
* Backup your metadata + automated daily backups
* Progressive Web App (PWA)
* Chromecast support on the web app
* Fetch metadata and cover art from several sources

**Shipped version:** 2.12.0~ynh1

## Screenshots

![Screenshot of Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Documentation and resources

- Official app website: <https://audiobookshelf.org/>
- Official user documentation: <https://www.audiobookshelf.org/docs>
- Upstream app code repository: <https://github.com/advplyr/audiobookshelf>
- YunoHost Store: <https://apps.yunohost.org/app/audiobookshelf>
- Report a bug: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Developer info

Please send your pull request to the [`testing` branch](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

To try the `testing` branch, please proceed like that:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
or
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**More info regarding app packaging:** <https://yunohost.org/packaging_apps>
