import { TestBed } from '@angular/core/testing';

import { EmergenciesService } from './emergencies.service';

describe('EmergenciesService', () => {
  let service: EmergenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
