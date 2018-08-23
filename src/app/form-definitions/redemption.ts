import { FormlyFieldConfig } from '@ngx-formly/core';

export var redemptionModelDefinition = { name: 'Redemption', id: "1773432", retailer: 'marksandspencer', redeemCode: '17732', redeemValue: 25 };

export var redemptionFieldsDefinition: FormlyFieldConfig[] = [
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
        key: 'retailer',
        type: 'input',
        templateOptions: {
            label: 'Retailer',
            required: true
        }
    },
    {
        key: 'redeemCode',
        type: 'input',
        templateOptions: {
            label: 'Redemption Code',
            required: true
        }
    },
    {
        key: 'redeemValue',
        type: 'input',
        templateOptions: {
            label: 'Redemption Value (min £5, max £75)',
            type: 'number',
            min: 5,
            max: 75,
            required: true,
        },
    }
];
