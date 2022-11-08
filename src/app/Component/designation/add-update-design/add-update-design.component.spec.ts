import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDesignComponent } from './add-update-design.component';

describe('AddUpdateDesignComponent', () => {
  let component: AddUpdateDesignComponent;
  let fixture: ComponentFixture<AddUpdateDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
