import { TestBed } from '@angular/core/testing';

import { MltxLibService } from './mltx-lib.service';

describe('MltxLibService', () => {
  let service: MltxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MltxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
