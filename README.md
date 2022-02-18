# Dotnet Lando Plugin

This is the _official_ [Lando](https://lando.dev) plugin for [Dotnet](https://dotnet.microsoft.com/). When installed it...

* Allows users to run various `dotnet` versions
* Serves applications over `nginx` or `apache`
* Runs in `cli` mode
* Comes with easy `composer` support

Of course, once a user is running their dotnet project with Lando they can take advantage of [all the other awesome development features](https://docs.lando.dev) Lando provides.

## Basic Usage

Add a `dotnet` service to your Landofile

```yaml
services:
  myservice:
    type: dotnet
    command: dotnet run
```

For more info you should check out the [docs](https://docs.lando.dev/dotnet):

* [Getting Started](https://docs.lando.dev/dotnet/)
* [Configuration](https://docs.lando.dev/dotnet/config.html)
* [Examples](https://github.com/lando/dotnet/tree/main/examples)
* [Development](https://docs.lando.dev/dotnet/development.html)

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando).

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/dotnet/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/dotnet/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/dotnet/releases).

## Contributors

<a href="https://github.com/lando/dotnet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/dotnet" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Selected Resources

* [LICENSE](https://github.com/lando/dotnet/blob/main/LICENSE.md)
* [The best professional advice ever](https://www.youtube.com/watch?v=tkBVDh7my9Q)
