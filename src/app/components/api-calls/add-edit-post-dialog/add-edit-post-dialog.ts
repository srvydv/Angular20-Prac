import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Posts } from '../../../model/posts.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Snackbar } from '../../../services/snackbar';

@Component({
  selector: 'app-add-edit-post-dialog',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './add-edit-post-dialog.html',
  styleUrl: './add-edit-post-dialog.scss',
})
export class AddEditPostDialog implements OnInit {
  readonly dialogRef = inject(MatDialogRef<AddEditPostDialog>);
  readonly dialogData = inject<Posts>(MAT_DIALOG_DATA);

  postForm: FormGroup;

  constructor(private snackbar: Snackbar) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.postForm.patchValue(this.dialogData);
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.postForm.markAllAsTouched();
    if (this.postForm.invalid) {
      this.snackbar.error('Please fill all the mandatory details');
      return;
    }
    const payload = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      userId: this.postForm.value.userId,
    };
    this.dialogRef.close(payload);
  }

  onReset() {
    this.postForm.reset();
    this.postForm.markAsPristine();
    Object.keys(this.postForm.controls).forEach((key) => {
      this.postForm.get(key)?.markAsUntouched();
    });
  }
}
