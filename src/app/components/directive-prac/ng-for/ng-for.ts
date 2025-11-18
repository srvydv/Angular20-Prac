import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';

@Component({
  selector: 'app-ng-for',
  imports: [SharedModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.scss',
})
export class NgFor {
  cityList: string[] = ['Pune', 'Nagpur', 'Mumbai', 'indore'];
}
