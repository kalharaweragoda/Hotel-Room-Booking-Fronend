import { TestBed } from '@angular/core/testing';

import { GuardServiceSpecTs } from './guard.service.spec.js';

describe('GuardServiceSpecTs', () => {
  let service: GuardServiceSpecTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardServiceSpecTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
