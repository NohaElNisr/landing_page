/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Course_ServiceService } from './Course_Service.service';

describe('Service: Course_Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Course_ServiceService]
    });
  });

  it('should ...', inject([Course_ServiceService], (service: Course_ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
