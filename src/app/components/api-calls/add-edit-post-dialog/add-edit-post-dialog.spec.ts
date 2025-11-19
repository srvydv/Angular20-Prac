import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPostDialog } from './add-edit-post-dialog';

describe('AddEditPostDialog', () => {
  let component: AddEditPostDialog;
  let fixture: ComponentFixture<AddEditPostDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPostDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPostDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
