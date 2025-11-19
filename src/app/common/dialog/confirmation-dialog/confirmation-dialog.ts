import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmationDialogMetaData {
  title: string;
  message: string;
  okButtonText: string;
  cancelButtonText: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  imports: [SharedModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);
  readonly dialogData = inject<ConfirmationDialogMetaData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close('ok');
  }
}
