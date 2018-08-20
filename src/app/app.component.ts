import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../node_modules/@angular/forms';
import { FormlyFieldConfig } from '../../node_modules/@ngx-formly/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    form = new FormGroup({});
    model: any;
    fields: any;

    changePasswordModel = { name: 'Change Password', id: "1744332", newPassword: 'Reward2018!', oldPassword: 'Reward2019!', confirmPassword: 'Reward2019!' };
    changePasswordFields: FormlyFieldConfig[] = [
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
            key: 'newPassword',
            type: 'input',
            templateOptions: {
                label: 'Old Password',
                required: true,
                type: 'password',
                minLength: 6
            }
        },
        {
            key: 'newPassword',
            type: 'input',
            templateOptions: {
                label: 'New Password',
                required: true,
                type: 'password',
                minLength: 6
            }
        },
        {
            key: 'confirmPassword',
            type: 'input',
            templateOptions: {
                label: 'Confirm Password',
                required: true,
                type: 'password',
                minLength: 6
            }
        }
    ];

    changeNomineeModel = { name: 'Change Nominee', id: "732332", oldName: 'Mark Murray', newName: 'Shaniece Nesbitt' }
    changeNomineeFields: FormlyFieldConfig[] = [
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

    redemptionModel = { name: 'Redemption', id: "1773432", retailer: 'marksandspencer', redeemCode: '17732', redeemValue: 25 }
    redemptionFields: FormlyFieldConfig[] = [
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

    ngOnInit() {
        this.model = this.changePasswordModel;
        this.fields = this.changePasswordFields;
    }


    submit(model) {
        console.log(model);
    }

    newForm(formtype: string) {
        if (!formtype) {
            return;
        }

        switch (formtype) {
            case 'changeNominee':
                this.model = this.changeNomineeModel;
                this.fields = this.changeNomineeFields;
                break;

            case 'redemption':
                this.model = this.redemptionModel;
                this.fields = this.redemptionFields;
                break;

            default:
                this.model = this.changePasswordModel;
                this.fields = this.changePasswordFields;
                break;

        }
    }

}
