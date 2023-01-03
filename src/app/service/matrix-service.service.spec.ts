import { TestBed } from '@angular/core/testing';

import { MatrixServiceService } from './matrix-service.service';

describe('MatrixServiceService', () => {
  let service: MatrixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
