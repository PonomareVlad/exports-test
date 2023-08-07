# exports-test

Just a silly package that implements a whole lot of different `exports` entries in `package.json`, along with non-standard but often used root-level fields such as `module`, `browser` etc.

All the exports expose a single named export: `getUsedField()`, which returns a string representing which field was used.

This can be useful if you are authoring or consuming packages and want to understand how your environment (node/deno/bundler/cloud) resolves which file to use.

In addition, there is a second path you can import: `exports-test/env`, which exposes a `getEnvironmentDetails()` method. This returns an object of the following shape:

```ts
{
  // Globals
  process: true,
  window: false,
  global: true,
  globalThis: true,
  document: false,

  // APIs/methods
  require: true,
  XMLHttpRequest: false,
  EventSource: false,
  WebSocket: false,
  fetch: true,
  setImmediate: true,
  URL: true,
  URLSearchParams: true,
  ReadableStream: true,
  WritableStream: true,
  Headers: true,
  subtleCrypto: true, // crypto.subtle

  // Node.js (and similar)
  processTitle: 'node', // `process.title`
  processVersion: 'v18.0.0', // `process.version`
}
```

The keys represent the API/global we are checking for, and the value represents whether or not the API is available. It does not do any deep checks, however - this is merely a `typeof` check - as long as it is not `undefined`, it is treated as being present.

## Installing

```sh
$ npm install exports-test
```

## Usage

```js
// ESM / TypeScript
import {getUsedField} from 'exports-test'
import {getEnvironmentDetails} from 'exports-test/env'

// CommonJS
const {getUsedField} = require('exports-test')
const {getEnvironmentDetails} = require('exports-test/env')

getUsedField() // 'exports.node'
getEnvironmentDetails() // {...}
```

## License

MIT-licensed. See LICENSE.
