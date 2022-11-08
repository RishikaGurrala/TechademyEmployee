import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePaymentsComponent } from './add-update-payments.component';

describe('AddUpdatePaymentsComponent', () => {
  let component: AddUpdatePaymentsComponent;
  let fixture: ComponentFixture<AddUpdatePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdatePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
