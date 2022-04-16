# Audiobookshelf pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://dash.yunohost.org/appci/app/audiobookshelf) ![](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)  
[![Installer Audiobookshelf avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Audiobookshelf rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Audiobookshelf est un serveur de livres audio auto-hébergé pour gérer et lire vos livres audio.

### Caractéristiques

* Entièrement **open-source**, y compris l'[application Android et iOS](https://github.com/advplyr/audiobookshelf-app) *(en version bêta)*
* Diffusez tous les formats de livres audio à la volée
* Prise en charge multi-utilisateurs avec autorisations personnalisées
* Conserve la progression par utilisateur et se synchronise sur tous les appareils
* Détecte automatiquement les mises à jour de la bibliothèque, pas besoin de re-scanner
* Téléchargez des livres audio avec dossiers de glisser-déposer
* Sauvegardez vos métadonnées et sauvegardes quotidiennes automatisées
* Application Web progressive (PWA)
* Prise en charge de Chromecast sur l'application Web
* Récupère les métadonnées et les pochettes à partir de plusieurs sources

**Version incluse :** 1.7.2~ynh1

**Démo :** https://audiobookshelf.org/

## Captures d'écran

![](./doc/screenshots/example.jpg)

## Avertissements / informations importantes

## Limites

* Audiobookshelf ne peut être installé que sur un domaine dédié
* Pas de prise en charge LDAP

## Connection

* L'utilisateur par défaut est `root` sans mot de passe
## Documentations et ressources

* Site officiel de l'app : https://audiobookshelf.org/
* Documentation officielle utilisateur : https://www.audiobookshelf.org/docs
* Dépôt de code officiel de l'app : https://github.com/advplyr/audiobookshelf
* Documentation YunoHost pour cette app : https://yunohost.org/app_audiobookshelf
* Signaler un bug : https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
ou
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps