import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPlayButtonComponent } from './green-play-button.component';

describe('GreenPlayButtonComponent', () => {
  let component: GreenPlayButtonComponent;
  let fixture: ComponentFixture<GreenPlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenPlayButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
