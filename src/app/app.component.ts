import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { changePasswordModelDefinition, changePasswordFieldsDefinition } from './form-definitions/change-password';
import { changeNomineeModelDefinition, changeNomineeFieldsDefinition } from './form-definitions/change-nominee';
import { redemptionModelDefinition, redemptionFieldsDefinition } from './form-definitions/redemption';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    form = new FormGroup({});
    model: any;
    fields: any;

    // The "model" array defines what fields are going to be on the form. 
    // The "fields" array defines the definitions of the various fields and their validators. 
    changePasswordModel = changePasswordModelDefinition;
    changePasswordFields = changePasswordFieldsDefinition;

    changeNomineeModel = changeNomineeModelDefinition;
    changeNomineeFields = changeNomineeFieldsDefinition;

    redemptionModel = redemptionModelDefinition;
    redemptionFields = redemptionFieldsDefinition;

    ngOnInit() {
        // Default the the "Change Password" form on startup.
        this.model = this.changePasswordModel;
        this.fields = this.changePasswordFields;
    }

    // This shows you what model data you get when the submit button is finally pressed. 
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
