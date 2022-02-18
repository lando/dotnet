---
title: Dotnet Lando Plugin
description: Add a highly configurable Dotnet service to Lando for local development with all the power of Docker and Docker Compose.
---

# dotnet

[Dotnet](https://en.wikipedia.org/wiki/.NET_Framework) is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library named Framework Class Library (FCL) and provides language interoperability (each language can use code written in other languages) across several programming languages.

You can easily add it to your Lando app by adding an entry to the [services](./../config/services.md) top-level config in your [Landofile](./../config/lando.md).

```yaml
services:
  myservice:
    type: dotnet
    command: dotnet run
```

## Supported versions

*   [3.1](https://hub.docker.com/_/microsoft-dotnet-sdk/)
*   **[2.1](https://hub.docker.com/_/microsoft-dotnet-sdk)** **(default)**
*   [custom](./../config/services.md#advanced)

## Unsupported versions

Due to upstream changes these no longer work.

*   [2](https://hub.docker.com/r/microsoft/dotnet/)
*   [2.0](https://hub.docker.com/r/microsoft/dotnet/)
*   [1](https://hub.docker.com/r/microsoft/dotnet/)
*   [1.1](https://hub.docker.com/r/microsoft/dotnet/)
*   [1.0](https://hub.docker.com/r/microsoft/dotnet/)

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](./compose.md) or a service [overrides](./../config/services.md#overrides).

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "yarn add @lando/dotnet" line to install a particular version eg
# yarn add @lando/dotnet@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "yarn init -y \
  && yarn add @lando/dotnet --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && yarn install --production --cwd /tmp/node_modules/@lando/dotnet \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/dotnet /plugins/@lando/dotnet"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/dotnet
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/dotnet`. This command will also show you _where_ the plugin is being loaded from.
