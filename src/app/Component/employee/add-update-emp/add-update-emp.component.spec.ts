import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateEmpComponent } from './add-update-emp.component';

describe('AddUpdateEmpComponent', () => {
  let component: AddUpdateEmpComponent;
  let fixture: ComponentFixture<AddUpdateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
