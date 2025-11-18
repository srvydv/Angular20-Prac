import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SharedModule } from '../../module/shared/shared-module';
import { LinkedSignals } from './linked-signals/linked-signals';

@Component({
  selector: 'app-signals',
  imports: [SharedModule, LinkedSignals],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {
  firstName = signal('Sourav');
  lastName = signal<string>('Yadav');
  rollNo = signal<number>(0);

  courseName: string = 'Angular';

  constructor() {
    const value = this.firstName();
    console.log(typeof value);

    setTimeout(() => {
      this.courseName = 'react JS';
      this.firstName.set('Ankit');
    }, 3000);
  }

  changeCourseName() {
    this.courseName = 'React JS';
  }

  incrementRollNo() {
    this.rollNo.update((oldValue) => oldValue + 1);
  }
}
