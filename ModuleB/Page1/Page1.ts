import { ModuleAHelper } from "ModuleA/CommonServices/ModuleAHelper"

export namespace ModuleB {
    export class Page1 {
        name = 'ModuleBPage1';
        title = 'Default Page Title';

        constructor() {
            this.title = ModuleAHelper.someCoolFunction();
        }
    }
}