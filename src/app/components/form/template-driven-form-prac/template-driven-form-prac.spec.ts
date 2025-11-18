import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormPrac } from './template-driven-form-prac';

describe('TemplateDrivenFormPrac', () => {
  let component: TemplateDrivenFormPrac;
  let fixture: ComponentFixture<TemplateDrivenFormPrac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormPrac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormPrac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
