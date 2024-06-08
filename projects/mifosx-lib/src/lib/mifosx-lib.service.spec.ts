import { TestBed } from '@angular/core/testing';

import { MifosxLibService } from './mifosx-lib.service';

describe('MifosxLibService', () => {
  let service: MifosxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MifosxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
