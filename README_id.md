<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Audiobookshelf untuk YunoHost

[![Tingkat integrasi](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Status kerja](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Status pemeliharaan](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Pasang Audiobookshelf dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Audiobookshelf secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

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

**Versi terkirim:** 2.16.1~ynh1

## Tangkapan Layar

![Tangkapan Layar pada Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://audiobookshelf.org/>
- Dokumentasi pengguna resmi: <https://www.audiobookshelf.org/docs>
- Depot kode aplikasi hulu: <https://github.com/advplyr/audiobookshelf>
- Gudang YunoHost: <https://apps.yunohost.org/app/audiobookshelf>
- Laporkan bug: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
atau
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
