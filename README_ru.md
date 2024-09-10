<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Audiobookshelf для YunoHost

[![Уровень интеграции](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Состояние работы](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Состояние сопровождения](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Установите Audiobookshelf с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Audiobookshelf быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

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

**Поставляемая версия:** 2.13.4~ynh1

## Снимки экрана

![Снимок экрана Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Документация и ресурсы

- Официальный веб-сайт приложения: <https://audiobookshelf.org/>
- Официальная документация пользователя: <https://www.audiobookshelf.org/docs>
- Репозиторий кода главной ветки приложения: <https://github.com/advplyr/audiobookshelf>
- Магазин YunoHost: <https://apps.yunohost.org/app/audiobookshelf>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
или
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
