// Minimal EventEmitter polyfill for browser
export class EventEmitter {
  constructor() {}
  on() { return this; }
  once() { return this; }
  off() { return this; }
  emit() { return false; }
  addListener() { return this; }
  removeListener() { return this; }
  removeAllListeners() { return this; }
  setMaxListeners() { return this; }
  getMaxListeners() { return 10; }
  listeners() { return []; }
  rawListeners() { return []; }
  listenerCount() { return 0; }
  prependListener() { return this; }
  prependOnceListener() { return this; }
  eventNames() { return []; }
}

// Support both named and default exports
export default EventEmitter;

