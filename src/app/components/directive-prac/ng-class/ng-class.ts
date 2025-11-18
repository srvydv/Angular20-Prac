import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [SharedModule, FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.scss',
})
export class NgClass {
  divBgColor: string = 'bg-primary';
  div2bgColor: string = 'bg-success';
  isChecked: boolean = false;

  //.bg-secondary

  addDiv1Color(color: string) {
    this.divBgColor = color;
  }
}
