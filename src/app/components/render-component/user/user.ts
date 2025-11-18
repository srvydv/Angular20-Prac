import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [MatAnchor, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {}
