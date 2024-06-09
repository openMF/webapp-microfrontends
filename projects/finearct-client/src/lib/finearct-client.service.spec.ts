import { TestBed } from '@angular/core/testing';

import { FinearctClientService } from './finearct-client.service';

describe('FinearctClientService', () => {
  let service: FinearctClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinearctClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
