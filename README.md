Asynchronous javascript code with different paradigms

# [Synchronous style](https://github.com/nin-jin/async-js/compare/sync?diff=unified&name=sync)

* [-] No parallelism.
* [-] Can not be isomorphic in general.
* [-] Expansive stack trace.
* [+] Very easy logic.
* [+] Easy to support.
* [+] Informative stack trace.
* [+] Fast (4ms).

```
TypeError: Cannot read property 'name' of null
    at Object.module.exports.getName (./user.js:13:23)
    at Object.module.exports.say (./greeter.js:2:41)
    at Object.<anonymous> (./index.js:7:13)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:456:32)
    at tryModuleLoad (module.js:415:12)
    at Function.Module._load (module.js:407:3)
    at Function.Module.runMain (module.js:575:10)
    at startup (node.js:160:18)
```

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
* [-] Non informative stack trace.
* [-] Slow (6ms).
* [+] Can be isomorphic.

```
TypeError: Cannot read property 'name' of null
    at error (./user.js:31:30)
    at fs.readFile.error (./user.js:20:16)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
```

## [Promises style](https://github.com/nin-jin/async-js/compare/sync...async-promises)

* [-] Need to rewrite all functions.
* [-] Hard to support.
* [-] Non informative stack trace.
* [-] Slow (7ms).
* [+] Easy parallelism.
* [+] Can be isomorphic.

[More info](https://learn.javascript.ru/promise)

```
TypeError: Cannot read property 'name' of null
    at getConfig.then.config (./user.js:19:22)
```

## [Generators&co style](https://github.com/nin-jin/async-js/compare/sync...async-generators-co)

* [-] Need to rewrite all functions.
* [-] Can not be isomorphic (required [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) support).
* [-] Non informative stack trace.
* [-] Slow (7ms).
* [+] Easy to support.
* [+] Easy parallelism.

[More info](https://www.npmjs.com/package/co)

```
TypeError: Cannot read property 'name' of null
    at Object.<anonymous> (./user.js:18:33)
    at next (native)
    at onFulfilled (./node_modules/co/index.js:65:19)
```

## [Async/await transformed to generators by Babel](https://github.com/nin-jin/async-js/compare/sync...async-await-babel)

* [-] Need to rewrite all functions.
* [-] Can not be isomorphic (required [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) support).
* [-] Non informative stack trace.
* [-] Very slow (22ms).
* [+] Easy to support.
* [+] Easy parallelism.

[More info](https://babeljs.io/docs/plugins/transform-async-to-generator/)

```
TypeError: Cannot read property 'name' of null
    at _callee$ (user.js:17:26)
    at tryCatch (./node_modules/regenerator-runtime/runtime.js:62:40)
    at GeneratorFunctionPrototype.invoke [as _invoke] (./node_modules/regenerator-runtime/runtime.js:336:22)
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (./node_modules/regenerator-runtime/runtime.js:95:21)
    at step (./user.js:3:191)
    at ./user.js:3:368
    at run (./node_modules\core-js\modules\es6.promise.js:89:22)
    at ./node_modules/core-js/modules/es6.promise.js:102:28
    at flush (./node_modules/core-js/modules/_microtask.js:18:9)
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
```

## [Fibers style](https://github.com/nin-jin/async-js/compare/sync...async-fibers)

* [-] Can not be isomorphic (NodeJS only).
* [-] Slow (6ms).
* [*] Need to start application in fiber.
* [+] Need not to rewrite all funcitons.
* [+] Easy to support.
* [+] Informative stack trace.
* [+] Easy parallelism.

[More info](https://github.com/laverdet/node-fibers)

```
TypeError: Cannot read property 'name' of null
    at Object.module.exports.getName (./user.js:14:23)
    at Object.module.exports.say (./greeter.js:2:41)
    at Future.task.error (./index.js:11:17)
    at ./node_modules/fibers/future.js:467:21
```

## [Atoms style](https://github.com/nin-jin/async-js/compare/sync...async-atoms)

* [-] Need to convert application from control-flow to data-flow.
* [-] Expansive stack trace.
* [-] Custom error handling are broken.
* [*] Medium to support.
* [+] Need not to rewrite all funcitons.
* [+] Easy parallelism.
* [+] Can be isomorphic.
* [+] Informative stack trace.
* [+] Fast (3.5ms).

[More info (russian)](https://habrahabr.ru/post/235121/)

```
TypeError: Cannot read property 'name' of null
    at Object.module.exports.getName (./user.js:20:24)
    at Object.module.exports.say (./greeter.js:2:41)
    at $jin2_atom.Atom [as pull_] (./index.js:8:13)
    at $jin2_atom.pull (./node_modules/jin2/index.js:285:25)
    at Function.$jin2_atom.induce (./node_modules/jin2/index.js:510:22)
    at Timeout._onTimeout (./node_modules/jin2/index.js:493:19)
    at tryOnTimeout (timers.js:224:11)
    at Timer.listOnTimeout (timers.js:198:5)
```
