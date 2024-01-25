---
title: Usage
description: Learn how to configure the Lando Dotnet service.
---

# Usage

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means, we *highly recommend* scanning the [services documentation](https://docs.lando.dev/config/services.html) to get a good handle on how the magicks work.

Also note that options, in addition to the [build steps](https://docs.lando.dev/config/services.html#build-steps) and [overrides](https://docs.lando.dev/config/services.html#overrides) that are available to every service, are shown below:

```yaml
services:
  myservice:
    type: dotnet:2.0
    ssl: false
    command: tail -f /dev/null
    port: 80
```

## Specifying a command

Note that if you *do not* define a `command` for this service, it will effectively be a "cli" container (e.g. it will not serve or run an application by default but will be available to run `dotnet` commands against).

If you want to actually launch a `dotnet` application, consider setting the `command` to something as shown below:

```yaml
services:
  myservice:
    type: dotnet
    command: dotnet run
```

## Using SSL

Also note that `ssl: true` will only generate certs in the [default locations](https://docs.lando.dev/config/security.html) and expose port `443`. It is up to the user to use the certs and secure port correctly in their application like as in [this article](https://asp.net-hacker.rocks/2018/07/05/aspnetcore-ssl.html).

## Setting a port

While we assume your `dotnet` service is running on port `80`, we recognize that many `dotnet` apps also run on port `8888` or otherwise. You can easily change our default to match whatever your app needs.

```yaml
services:
  myservice:
    type: dotnet
    port: 8888
```


## Adding tooling commands

By default a service will not do any tooling routing for you but you can add helpful `lando` commands.

```yaml
tooling:
  donet:
    service: myservice
```

You can then invoke them on the command line.

```bash
lando dotnet
```

Lando tooling is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/config/tooling.html) of its cool features.

## Adding routing

By default a service will not do any proxy routing for you but you can add your own.

```yaml
proxy:
  myservice:
    - myapp.lndo.site
    - something.else.local
```

Lando proxying is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/config/proxy.html) of its cool features.

