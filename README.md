Asynchronous javascript code with different paradigms

# [Synchronous style](https://github.com/nin-jin/async-js/compare/sync?diff=unified&name=sync)

* [-] No parallelism.
* [-] Can not be isomorphic in general.
* [+] Very easy logic.
* [+] Easy to support.
* [+] Fastest (4ms).

## Start
```sh
npm test
```

## Logic

Controller (index.js) gets user info from model (user.js) and calls view (greeter.js) to talk with user.

# Asynchronous

## Logic

We want to load user info asynchronously. Let's do it with..

## [NodeJS style](https://github.com/nin-jin/async-js/compare/sync...async-nodejs?diff=split&name=async-nodejs)

* [-] Non clear logic.
* [-] Too more code.
* [-] Need to rewrite all functions.
* [-] Hard to support.
* [-] Hard parallelism.
* [+] Can be isomorphic.
* [+] Fast (6ms).

## [Promises style](https://github.com/nin-jin/async-js/compare/sync...async-promises)

* [-] Need to rewrite all functions.
* [-] Hard to support.
* [+] Easy parallelism.
* [+] Can be isomorphic.
* [+] Fast (7ms).

[More info](https://learn.javascript.ru/promise)

## Generators style

## async/await style

## [Fibers style](https://github.com/nin-jin/async-js/compare/sync...async-fibers)

* [-] Can not be isomorphic (NodeJS only).
* [*] Need to start application in fiber.
* [+] Need not to rewrite all funcitons.
* [+] Easy to support.
* [+] Easy parallelism.
* [+] Fast (6ms).

[More info](https://github.com/laverdet/node-fibers)

## [Atoms style](https://github.com/nin-jin/async-js/compare/sync...async-atoms)

* [-] Need to convert application from control-flow to data-flow.
* [*] Medium to support.
* [+] Need not to rewrite all funcitons.
* [+] Easy parallelism.
* [+] Can be isomorphic.
* [+] Fastest (3.5ms).

[More info (russian)](https://habrahabr.ru/post/235121/)
