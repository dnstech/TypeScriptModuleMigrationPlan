import { ModuleAHelper } from "ModuleA/CommonServices/ModuleAHelper"
import { ModuleAHelper as RepublishedModuleAHelper } from "ModuleA/Shared"
import ServiceRegistrations from "ModuleA/Shared"

// Note that here Page1 is also declared in ModuleA, we have no conflict here thanks to import / export
export class Page1 {
    name = 'ModuleBPage1';
    title = 'Default Page Title';
    note = ''
    constructor() {
        this.title = RepublishedModuleAHelper.someCoolFunction();
        this.note = ServiceRegistrations["foo-service"][0].createNew;
    }
}