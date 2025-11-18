import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [MatAnchor],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  constructor(private router: Router) {}
  navigateDataBindingPage() {
    this.router.navigate(['/dataBinding']);
  }
}
