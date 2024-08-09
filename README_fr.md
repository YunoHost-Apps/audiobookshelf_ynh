<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Audiobookshelf pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://ci-apps.yunohost.org/ci/apps/audiobookshelf/) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![Installer Audiobookshelf avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Audiobookshelf rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

Audiobookshelf est un serveur auto-hébergé pour gérer et lire vos livres audio.

### Fonctionnalités

* Totalement **open-source**, ainsi que les [apps Android & iOS](https://github.com/advplyr/audiobookshelf-app) *(en version bêta)*
* Diffusion de tous les formats de livres audio à la volée
* Support multi-utilisateurs avec des permissions configurables
* Sauvegarde par utilisateur et synchronisation à travers plusieurs appareils de l'avancée de lecture
* Détection automatique des mises à jour de la bibliothèque, pas besoin de rescanner
* Téléversement des livres audio en masse et support du glisser-déposer de dossiers
* Sauvegarde des métadonnées et sauvegardes automatiques quotidiennes
* Progressive Web App (PWA)
* Support de Chromecast dans la webapp
* Récupération des métadonnées et des pochettes depuis plusieurs sources

**Version incluse :** 2.12.2~ynh1

## Captures d’écran

![Capture d’écran de Audiobookshelf](./doc/screenshots/audiobookshelf.jpg)

## Documentations et ressources

- Site officiel de l’app : <https://audiobookshelf.org/>
- Documentation officielle utilisateur : <https://www.audiobookshelf.org/docs>
- Dépôt de code officiel de l’app : <https://github.com/advplyr/audiobookshelf>
- YunoHost Store : <https://apps.yunohost.org/app/audiobookshelf>
- Signaler un bug : <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
ou
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
