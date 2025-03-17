<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Audiobookshelf dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/audiobookshelf)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/)
![Status działania](https://apps.yunohost.org/badge/state/audiobookshelf)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/audiobookshelf)

[![Zainstaluj Audiobookshelf z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Audiobookshelf na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

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

**Dostarczona wersja:** 2.20.0~ynh1

## Zrzuty ekranu

![Zrzut ekranu z Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://audiobookshelf.org/>
- Oficjalna dokumentacja: <https://www.audiobookshelf.org/docs>
- Repozytorium z kodem źródłowym: <https://github.com/advplyr/audiobookshelf>
- Sklep YunoHost: <https://apps.yunohost.org/app/audiobookshelf>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
lub
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
