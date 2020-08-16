import { TestBed } from '@angular/core/testing';

import { ThemoviedbdataService } from './themoviedb-data.service';

describe('ThemoviedbdataService', () => {
  let service: ThemoviedbdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemoviedbdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
