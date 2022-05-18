import { TestBed } from '@angular/core/testing';

import { TempretureService } from './tempreture.service';

describe('TempretureService', () => {
  let service: TempretureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempretureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
