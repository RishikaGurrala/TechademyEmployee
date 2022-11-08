import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkinghoursComponent } from './show-workinghours.component';

describe('ShowWorkinghoursComponent', () => {
  let component: ShowWorkinghoursComponent;
  let fixture: ComponentFixture<ShowWorkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWorkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWorkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
