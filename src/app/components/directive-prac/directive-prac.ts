import { Component } from '@angular/core';
import { NgIf } from './ng-if/ng-if';
import { NgFor } from './ng-for/ng-for';
import { NgClass } from './ng-class/ng-class';
import { NgStyle } from './ng-style/ng-style';

@Component({
  selector: 'app-directive-prac',
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './directive-prac.html',
  styleUrl: './directive-prac.scss',
})
export class DirectivePrac {}
