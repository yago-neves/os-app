import { TestBed } from '@angular/core/testing';

import { StatusosServiceService } from './statusos-service.service';

describe('StatusosServiceService', () => {
  let service: StatusosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
