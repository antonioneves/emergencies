import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { EmergenciesService } from './emergencies.service';

describe('EmergenciesService', () => {
  let service: EmergenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(EmergenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
