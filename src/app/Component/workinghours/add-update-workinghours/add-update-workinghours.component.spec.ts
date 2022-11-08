import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateWorkinghoursComponent } from './add-update-workinghours.component';

describe('AddUpdateWorkinghoursComponent', () => {
  let component: AddUpdateWorkinghoursComponent;
  let fixture: ComponentFixture<AddUpdateWorkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateWorkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateWorkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
