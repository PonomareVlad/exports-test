export function getEnvironmentDetails() {
  return {
    // Globals
    process: ify(typeof process),
    window: ify(typeof window),
    global: ify(typeof global),
    globalThis: ify(typeof globalThis),
    document: ify(typeof document),

    // APIs
    require: ify(typeof require),
    XMLHttpRequest: ify(typeof XMLHttpRequest),
    EventSource: ify(typeof EventSource),
    WebSocket: ify(typeof WebSocket),
    fetch: ify(typeof fetch),
    subtleCrypto: (typeof crypto !== 'undefined' && ify(typeof crypto.subtle)) || false,
    setImmediate: ify(typeof setImmediate),
    URL: ify(typeof URL),
    URLSearchParams: ify(typeof URLSearchParams),
    ReadableStream: ify(typeof ReadableStream),
    WritableStream: ify(typeof WritableStream),
    Headers: ify(typeof Headers),

    // Process-like stuff
    processTitle: (typeof process !== 'undefined' && process.title) || false,
    processVersion: (typeof process !== 'undefined' && process.version) || false,
  }
}

function ify(thing) {
  return thing === 'undefined' ? false : true
}
