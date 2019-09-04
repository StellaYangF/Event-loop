# Event-loop

## What is Event-loop?
Main thread reads, takes and executes event from task queue, which is looped.
* Refers to [Ruanyifeng Blog](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
  <image src='./image/Event-loop.jpg' />

## Classification
* Macrotask queue:
  1. script (the whole code)
  2. setTimeout
  3. setInterval
  4. setImmediate
  5. I/O
  6. UI rendering

* Microtask queue:
  1. process.nextTick (Node.js)
  2. Promises
  3. Object.observe
  4. MutationObserver

## Priority
#### Runtime in browser
Execution context stack:
microtask > macrotask

#### Runtime in node