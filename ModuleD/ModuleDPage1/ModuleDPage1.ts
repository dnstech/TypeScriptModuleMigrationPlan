import { Page1 as ModuleBPage1 } from "ModuleB/Page1/Page1"

// Demonstration that while namespaces are no longer necessary for isolation, they still work
export namespace ModuleDPages  {

    export class Page1 {
        childPage: ModuleBPage1;

        constructor() {
            this.childPage = new ModuleBPage1();
        }
    }
}