import { Component } from '@angular/core';
import { Admin } from './admin/admin';
import { User } from './user/user';

@Component({
  selector: 'app-render-component',
  imports: [Admin, User],
  templateUrl: './render-component.html',
  styleUrl: './render-component.scss',
})
export class RenderComponent {}
