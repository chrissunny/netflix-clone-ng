import { TestBed } from '@angular/core/testing';

import { ThemoviedbRequestService } from './themoviedb-request.service';

describe('ThemoviedbRequestService', () => {
  let service: ThemoviedbRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemoviedbRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
