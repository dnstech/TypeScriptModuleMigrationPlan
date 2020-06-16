/// <reference path="LegacyService.ts" />

// The following will produce a compiler error and needs to be moved to an import
/// <reference path="../../ModuleA/CommonServices/ModuleAHelper.ts" />

class LegacyPage {
    tax: number;

    constructor() {
        this.tax = ModuleAHelper.calculateTax();
        this.tax += 1;
        this.tax -= 1;
    }
}