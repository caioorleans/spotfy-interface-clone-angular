import { TestBed } from '@angular/core/testing';

import { DaytimeService } from './daytime.service';

describe('DaytimeService', () => {
  let service: DaytimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaytimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
