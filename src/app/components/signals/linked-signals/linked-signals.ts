import { Component, linkedSignal, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-linked-signals',
  imports: [MatButton],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.scss',
})
export class LinkedSignals {
  firstName = signal<string>('Sourav');
  lastName = signal<string>('Yadav');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOption, previous) => {
      const fullName = newOption + ' ' + this.lastName();
      return fullName;
    },
  });

  user = signal({ id: 111, name: 'Ankit' });

  email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id,
  });

  constructor() {}

  changeFirstName() {
    this.firstName.set('Ankit');
  }

  changeId() {
    debugger;
    this.user.set({ id: 123, name: 'Ankit' });
  }
}
