import { FormlyFieldConfig } from '@ngx-formly/core';

// The "model" array defines what fields are going to be on the form. 
  export var changePasswordModelDefinition = { name: 'Change Password', id: "1744332", newPassword: 'Reward2018!', oldPassword: 'Reward2019!', confirmPassword: 'Reward2019!' };

  // The "fields" array defines the definitions of the various fields and their validators. 
  export var changePasswordFieldsDefinition: FormlyFieldConfig[] = [
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
          key: 'oldPassword',
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
