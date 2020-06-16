# TypeScript Project References

This is an investigation into moving to ES modules to replace our `/// <reference path="">` process at the moment with TypeScript.

The iBodyshop code base is becoming incredibly large and we need a way to migrate to a cleaner code isolation model.

## Must haves
* Faster build times while still having live incremental builds on save.
* Simple process for adding new modules (very little boiler plate or ceremony).
* Progressive migration process. New modules use the new import export behaviour, while old reference based ones can co-exist.
* Ability to easily define sets of global compiler flag policies, with the ability to slowly make these stricter over time on a module by module basis e.g. Introduce `noImplicitAny: true` policy and migrate projects over to the new setting one by one etc.
* File path independence across modules. If I move a file between `ModuleA/Scripts/TestPage.ts` to `ModuleA/TestPage/TestPage.ts` I should not have to update any other modules. That is, one modules project structure should not affect the reference paths of other modules. Everything should be exported under a single module namespace.
* File concatenation of modules - multiple files in Debug (simpler debugging experience), with a single source file in Release (faster and more efficient download times). 
* Reference to types rather than importing of module code. Our imports need to only light up at runtime.
* No global list of modules or global shared libraries. This is getting too large and we are getting too many. We need a pay for play system where if we add a new dependency that is large, only the module that uses it is downloaded at runtime.
* Ability to use `require()` based modules from third parties. At the moment iBodyshop has no support for this system and we have to initialize global shared state.

## Nice to haves
* Nice editor experience with source maps and go to definition.
* Our own compiler to be able to inspect imports and exports to automatically build dependency graph for our Service Locator Module.ts.
* Type-checking of service locator service references. With support for multi-module exports under a shared name. Our service locator allows for multiple modules to expose services under a single name, which will automatically compose into an array at runtime.


## Plan
* Move to using [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) with a standardised module-tsconfig.json
* TODO: Develop a process for either automated or manual migration of existing references.

## How to build this sample
1. Make sure you have TypeScript 3.8  (or later) installed and in your path using:<br>`npm install typescript -g`
2. Change to the root solution folder and run:<br>`tsc --build --watch` 

That's it! You now have a live compiling project.

## How to add a new module
1. Create a module folder e.g. ModuleE
2. Create a Global module exports file e.g. index.ts or Module.ts This is where you can republish exports for other modules to import, this isn't absolutely necessary but provides for a cleaner abstract.
3. Create a tsconfig.json file in that folder with the following content:

```
{
    "extends": "../module-tsconfig.json",
    "include": [
        "Module.ts",
        "**/*"
    ]
}
```


## How to migrate existing code that uses reference paths
* Add export to all referenced classes and namespaces
* 

# TODO
1. Remove JS
2. Update TypeScript to 3.9.4
3. Add tsconfigs and rehome lib files.

## Interesting References
* [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
* [Javascript Tutorial - SystemJs](https://www.youtube.com/watch?v=AmdKF2UhFzw)
* [GitHub - Project References Demo](https://github.com/RyanCavanaugh/project-references-demo)