import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrasPlaylistsComponent } from './outras-playlists.component';

describe('OutrasPlaylistsComponent', () => {
  let component: OutrasPlaylistsComponent;
  let fixture: ComponentFixture<OutrasPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrasPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrasPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
