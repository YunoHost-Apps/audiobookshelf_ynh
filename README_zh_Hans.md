<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Audiobookshelf

[![集成程度](https://dash.yunohost.org/integration/audiobookshelf.svg)](https://dash.yunohost.org/appci/app/audiobookshelf) ![工作状态](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.status.svg) ![维护状态](https://ci-apps.yunohost.org/ci/badges/audiobookshelf.maintain.svg)

[![使用 YunoHost 安装 Audiobookshelf](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=audiobookshelf)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Audiobookshelf。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

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

**分发版本：** 2.10.0~ynh1

## 截图

![Audiobookshelf 的截图](./doc/screenshots/audiobookshelf.jpg)

## 文档与资源

- 官方应用网站： <https://audiobookshelf.org/>
- 官方用户文档： <https://www.audiobookshelf.org/docs>
- 上游应用代码库： <https://github.com/advplyr/audiobookshelf>
- YunoHost 商店： <https://apps.yunohost.org/app/audiobookshelf>
- 报告 bug： <https://github.com/YunoHost-Apps/audiobookshelf_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
或
sudo yunohost app upgrade audiobookshelf -u https://github.com/YunoHost-Apps/audiobookshelf_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
