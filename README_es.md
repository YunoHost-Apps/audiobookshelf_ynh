<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Audiobookshelf para Yunohost

[![Nivel de integración](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Estado funcional](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Estado En Mantención](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Instalar Audiobookshelf con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarAudiobookshelf rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

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

**Versión actual:** 2.16.0~ynh1

## Capturas

![Captura de Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Documentaciones y recursos

- Sitio web oficial: <https://audiobookshelf.org/>
- Documentación usuario oficial: <https://www.audiobookshelf.org/docs>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/advplyr/audiobookshelf>
- Catálogo YunoHost: <https://apps.yunohost.org/app/audiobookshelf>
- Reportar un error: <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
o
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
