import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonsHeaderComponent } from './nav-buttons-header.component';

describe('NavButtonsHeaderComponent', () => {
  let component: NavButtonsHeaderComponent;
  let fixture: ComponentFixture<NavButtonsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavButtonsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
