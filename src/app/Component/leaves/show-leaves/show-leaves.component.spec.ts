import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeavesComponent } from './show-leaves.component';

describe('ShowLeavesComponent', () => {
  let component: ShowLeavesComponent;
  let fixture: ComponentFixture<ShowLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
