import { ModuleAHelper } from "CommonServices/ModuleAHelper";

export class Page1 { 
    name = 'Page1';
    setting = '';
    title = 'Default Title';
    tax: number = 0;
    constructor() {
        this.setting = ModuleAHelper.SomeSetting;
        this.tax = ModuleAHelper.calculateTax();
    }
}
