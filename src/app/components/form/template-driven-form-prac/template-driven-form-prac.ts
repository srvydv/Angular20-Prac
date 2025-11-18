import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-prac',
  imports: [SharedModule, FormsModule],
  templateUrl: './template-driven-form-prac.html',
  styleUrl: './template-driven-form-prac.scss',
})
export class TemplateDrivenFormPrac {
  stateList: string[] = ['Madhy Pradesh', 'Maharashtra', 'Goa'];

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'Goa',
    zipCode: '',
    isTermsAgree: false,
  };

  onSave() {
    const formValue = this.userObj;
    console.log('formValue', formValue);
  }
}
