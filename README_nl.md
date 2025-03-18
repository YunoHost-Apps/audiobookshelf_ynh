<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Audiobookshelf voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/audiobookshelf)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/audiobookshelf)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/audiobookshelf)

[![Audiobookshelf met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Audiobookshelf snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

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

**Geleverde versie:** 2.20.0~ynh1

## Schermafdrukken

![Schermafdrukken van Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Documentatie en bronnen

- Officiele website van de app: <https://audiobookshelf.org/>
- Officiele gebruikersdocumentatie: <https://www.audiobookshelf.org/docs>
- Upstream app codedepot: <https://github.com/advplyr/audiobookshelf>
- YunoHost-store: <https://apps.yunohost.org/app/audiobookshelf>
- Meld een bug: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
of
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
