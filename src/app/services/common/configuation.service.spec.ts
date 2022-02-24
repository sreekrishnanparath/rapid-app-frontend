import { TestBed } from '@angular/core/testing';

import { ConfiguationService } from './configuation.service';

describe('ConfiguationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguationService = TestBed.get(ConfiguationService);
    expect(service).toBeTruthy();
  });
});
