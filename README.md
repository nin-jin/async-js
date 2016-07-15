Asynchronous javascript code with different paradigms

# [Synchronous style](https://github.com/nin-jin/async-js/compare/sync?diff=unified&name=sync)

* [-] No parallelism.
* [-] Can not be isomorphic in general.
* [+] Very easy logic.
* [+] Easy to support.
* [+] Fast (4ms).

## Start
```sh
npm test
```

## Logic

Controller (index.js) gets user info from model (user.js) and calls view (greeter.js) to talk with user.

# Asynchronous

## Logic

We want to load user info asynchronously. Let's do it with..

## [NodeJS style](https://github.com/nin-jin/async-js/compare/sync...async-nodejs)

* [-] Non clear logic.
* [-] Too more code.
* [-] Need to rewrite all functions.
* [-] Hard to support.
* [-] Hard parallelism.
* [-] Slow (6ms).
* [+] Can be isomorphic.

## [Promises style](https://github.com/nin-jin/async-js/compare/sync...async-promises)

* [-] Need to rewrite all functions.
* [-] Hard to support.
* [-] Slow (7ms).
* [+] Easy parallelism.
* [+] Can be isomorphic.

[More info](https://learn.javascript.ru/promise)

## [Generators&co style](https://github.com/nin-jin/async-js/compare/sync...async-generators-co)

* [-] Need to rewrite all functions.
* [-] Can not be isomorphic (requires [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) support).
* [-] Slow (7ms).
* [+] Easy to support.
* [+] Easy parallelism.

[More info](https://www.npmjs.com/package/co)

## [Async/await transformed to generators by Babel](https://github.com/nin-jin/async-js/compare/sync...async-await-babel)

* [-] Need to rewrite all functions.
* [-] Can not be isomorphic (requires [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) support).
* [-] Very slow (22ms).
* [+] Easy to support.
* [+] Easy parallelism.

## [Fibers style](https://github.com/nin-jin/async-js/compare/sync...async-fibers)

* [-] Can not be isomorphic (NodeJS only).
* [-] Slow (6ms).
* [*] Need to start application in fiber.
* [+] Need not to rewrite all funcitons.
* [+] Easy to support.
* [+] Easy parallelism.

[More info](https://github.com/laverdet/node-fibers)

## [Atoms style](https://github.com/nin-jin/async-js/compare/sync...async-atoms)

* [-] Need to convert application from control-flow to data-flow.
* [*] Medium to support.
* [+] Need not to rewrite all funcitons.
* [+] Easy parallelism.
* [+] Can be isomorphic.
* [+] Fast (3.5ms).

[More info (russian)](https://habrahabr.ru/post/235121/)
