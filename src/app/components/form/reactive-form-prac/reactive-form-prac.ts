import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Snackbar } from '../../../services/snackbar';

@Component({
  selector: 'app-reactive-form-prac',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './reactive-form-prac.html',
  styleUrl: './reactive-form-prac.scss',
})
export class ReactiveFormPrac {
  userFrom: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(''),
    state: new FormControl('Goa'),
    zipCode: new FormControl(''),
    isTermsAgree: new FormControl(false),
  });

  stateList: string[] = ['Madhy Pradesh', 'Maharashtra', 'Goa'];

  constructor(private snackbar: Snackbar) {
    this.userFrom.controls['state'].disable();

    setTimeout(() => {
      this.userFrom.controls['state'].enable();
    }, 3000);
  }

  onSave() {
    this.userFrom.markAllAsTouched();
    if (this.userFrom.invalid) {
      this.snackbar.error('Please fill all the mandatory details!');
      return;
    }
    console.log('formValue', this.userFrom.value);
  }
}
