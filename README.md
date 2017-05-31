# videojs-qs

A wrapper for the [Node querystring module][node-qs] equivalent provided by [rollup-plugin-node-builtins][rpnb] for Video.js-based players.

**Note:** Does not support the `querystring.escape` or `querystring.unescape` properties.

## Installation

```sh
npm install --save videojs-qs
```

## API

There are two ways to use this module/plugin. There is no particular advantage or disadvantage to one or the other - use whichever makes the most sense in your use-case.

### `videojs.qs()` Method

Including this module will add the `qs` method to the `videojs` namespace. This is a function that returns a clone of the [Node querystring built-in module][node-qs].

```js
var qs = videojs.qs().parse(window.location.search);
```

### `qs` Plugin

In addition to the `videojs.qs()` method, a plugin is added that registers a `qs()` method on every player instance. This method behaves identically to the `videojs.qs()` method.

```js
var qs = player.qs().parse(window.location.search);
```

## License

Apache-2.0. Copyright (c) Brightcove, Inc.


[node-qs]: https://nodejs.org/api/querystring.html
[rpnb]: https://github.com/calvinmetcalf/rollup-plugin-node-builtins
[videojs]: http://videojs.com/
