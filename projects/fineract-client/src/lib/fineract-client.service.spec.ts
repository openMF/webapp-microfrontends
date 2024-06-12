import { TestBed } from '@angular/core/testing';

import { FineractClientService } from './fineract-client.service';

describe('FineractClientService', () => {
  let service: FineractClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FineractClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
