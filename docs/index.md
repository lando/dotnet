---
title: Dotnet Lando Plugin
description: Add a highly configurable Dotnet service to Lando for local development with all the power of Docker and Docker Compose.
---

# dotnet

[Dotnet](https://en.wikipedia.org/wiki/.NET_Framework) is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library named Framework Class Library (FCL) and provides language interoperability (each language can use code written in other languages) across several programming languages.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/services.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: dotnet
    command: dotnet run
```

## Supported versions

*   [3.1](https://hub.docker.com/r/microsoft/dotnet-sdk/)
*   **[2.1](https://hub.docker.com/r/microsoft/dotnet-sdk)** **(default)**
*   [custom](https://docs.lando.dev/core/v3/services/lando.html#overrides)

## Unsupported versions

Due to upstream changes these no longer work.

*   [2](https://hub.docker.com/r/microsoft/dotnet)
*   [2.0](https://hub.docker.com/r/microsoft/dotnet)
*   [1](https://hub.docker.com/r/microsoft/dotnet)
*   [1.1](https://hub.docker.com/r/microsoft/dotnet)
*   [1.0](https://hub.docker.com/r/microsoft/dotnet)

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](https://docs.lando.dev/plugins/compose) or a service [overrides](https://docs.lando.dev/core/v3/services/lando.html#overrides).
