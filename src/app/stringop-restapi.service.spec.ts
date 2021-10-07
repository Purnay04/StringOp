import { TestBed } from '@angular/core/testing';

import { StringopRestapiService } from './stringop-restapi.service';

describe('StringopRestapiService', () => {
  let service: StringopRestapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringopRestapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
