import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDesigComponent } from './show-desig.component';

describe('ShowDesigComponent', () => {
  let component: ShowDesigComponent;
  let fixture: ComponentFixture<ShowDesigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDesigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
