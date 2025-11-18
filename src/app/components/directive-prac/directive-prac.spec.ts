import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePrac } from './directive-prac';

describe('DirectivePrac', () => {
  let component: DirectivePrac;
  let fixture: ComponentFixture<DirectivePrac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePrac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePrac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
