import { ModuleAHelper } from "CommonServices/ModuleAHelper"
export { ModuleAHelper };

const services = {  
    'foo-service': [
        { createNew: 'ModuleAHelper' }
    ]
};
export { services as Services }