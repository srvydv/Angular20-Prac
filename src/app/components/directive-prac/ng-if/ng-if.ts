import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';

@Component({
  selector: 'app-ng-if',
  imports: [SharedModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.scss',
})
export class NgIf {
  div1Visible: boolean = true;

  showDiv1() {
    this.div1Visible = true;
  }
  hideDiv1() {
    this.div1Visible = false;
  }
}
