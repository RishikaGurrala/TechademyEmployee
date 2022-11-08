import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration1Component } from './registration1.component';

describe('Registration1Component', () => {
  let component: Registration1Component;
  let fixture: ComponentFixture<Registration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registration1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
