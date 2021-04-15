import { TestBed } from '@angular/core/testing';

import { FacilitatorService } from './facilitator.service';

describe('FacilitatorService', () => {
  let service: FacilitatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilitatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
