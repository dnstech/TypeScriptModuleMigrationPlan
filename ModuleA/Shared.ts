import { ModuleAHelper } from "CommonServices/ModuleAHelper"

// Here we are republishing under an alias Shared name, 
// so others can use with: import { ModuleAHelper } from "ModuleA/Shared"
export { ModuleAHelper as ModuleAHelper };

const ServiceRegistrations = {  
    'foo-service': [
        { createNew: 'ModuleAHelper' }
    ]
};

// Service Locator services can be published as a single object under a known name.
export default ServiceRegistrations