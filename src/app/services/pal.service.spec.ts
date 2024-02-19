import { TestBed } from '@angular/core/testing';

import { PalService } from './pal.service';

describe('PalService', () => {
  let service: PalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
