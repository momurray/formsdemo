
import { FormlyFieldConfig } from '@ngx-formly/core';


    export var changeNomineeModelDefinition = { name: 'Change Nominee', id: "732332", oldName: 'Mark Murray', newName: 'Shaniece Nesbitt' };

    export var changeNomineeFieldsDefinition: FormlyFieldConfig[] = [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                label: 'Template Name',
            },
            expressionProperties: {
                'templateOptions.disabled': 'true'
            }
        },
        {
            key: 'id',
            type: 'input',
            templateOptions: {
                label: 'SFD Template Id',
            },
            expressionProperties: {
                'templateOptions.disabled': 'true'
            }
        },
        {
            key: 'oldName',
            type: 'input',
            templateOptions: {
                label: 'Old Name',
                required: true
            }
        },
        {
            key: 'newName',
            type: 'input',
            templateOptions: {
                label: 'New Name',
                required: true
            }
        }
    ];
