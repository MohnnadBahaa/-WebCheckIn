import { TestBed } from '@angular/core/testing';

import { GetTicketDetealiesService } from './get-ticket-detealies.service';

describe('GetTicketDetealiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTicketDetealiesService = TestBed.get(GetTicketDetealiesService);
    expect(service).toBeTruthy();
  });
});
