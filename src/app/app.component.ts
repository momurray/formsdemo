import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    form = new FormGroup({});
    model: any;
    fields: any;

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
    changePasswordModel = { name: 'Change Password', id: "1744332", newPassword: 'Reward2018!', oldPassword: 'Reward2019!', confirmPassword: 'Reward2019!' };


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
    changeNomineeModel = { name: 'Change Nominee', id: "732332", oldName: 'Mark Murray', newName: 'Shaniece Nesbitt' }

    redemptionFields: FormlyFieldConfig[] = [{

    }];

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
                break;

            default:
                this.model = this.changePasswordModel;
                this.fields = this.changePasswordFields;
                break;

        }
    }

}
