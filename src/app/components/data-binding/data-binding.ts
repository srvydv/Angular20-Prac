import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../module/shared/shared-module';
import { Snackbar } from '../../services/snackbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [SharedModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBinding {
  firstName: string = 'Sourav';
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter full name';
  car: string = '';

  constructor(private snackbar: Snackbar) {
    console.log(this.firstName);
  }

  handleClickSave() {
    this.snackbar.success('Clicked on Save');
  }

  handleClickCancel() {
    this.snackbar.error('Click on Cancel');
  }
}
