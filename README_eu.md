<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# Audiobookshelf YunoHost-erako

[![Integrazio maila](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Funtzionamendu egoera](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Mantentze egoera](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Instalatu Audiobookshelf YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek Audiobookshelf YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

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

**Paketatutako bertsioa:** 2.11.0~ynh1

## Pantaila-argazkiak

![Audiobookshelf(r)en pantaila-argazkia](./doc/screenshots/audiobookshelf.jpg)

## Dokumentazioa eta baliabideak

- Aplikazioaren webgune ofiziala: <https://audiobookshelf.org/>
- Erabiltzaileen dokumentazio ofiziala: <https://www.audiobookshelf.org/docs>
- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/advplyr/audiobookshelf>
- YunoHost Denda: <https://apps.yunohost.org/app/audiobookshelf>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

`testing` abarra probatzeko, ondorengoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
edo
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
