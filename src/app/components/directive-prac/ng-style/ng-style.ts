import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [SharedModule, FormsModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.scss',
})
export class NgStyle {
  div1BackColor: string = '';
  ischecked: boolean = false;

  // In case of response from API call
  myCss = {
    'background-color': 'yellow',
    width: '100px',
    height: '100px',
  };

  addDivColor(color: string) {
    this.div1BackColor = color;
  }
}
