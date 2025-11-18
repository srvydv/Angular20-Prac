import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPrac } from './reactive-form-prac';

describe('ReactiveFormPrac', () => {
  let component: ReactiveFormPrac;
  let fixture: ComponentFixture<ReactiveFormPrac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPrac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPrac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
