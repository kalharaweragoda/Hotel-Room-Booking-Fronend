import { TestBed } from '@angular/core/testing';

import { ApiServiceSpecTs } from './api.service.js';

describe('ApiServiceSpecTs', () => {
  let service: ApiServiceSpecTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceSpecTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
