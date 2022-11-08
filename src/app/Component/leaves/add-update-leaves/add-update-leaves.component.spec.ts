import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateLeavesComponent } from './add-update-leaves.component';

describe('AddUpdateLeavesComponent', () => {
  let component: AddUpdateLeavesComponent;
  let fixture: ComponentFixture<AddUpdateLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
