import { TestBed } from '@angular/core/testing';

import { GithubServiceService } from './github-service.service';

describe('GithubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubServiceService = TestBed.get(GithubServiceService);
    expect(service).toBeTruthy();
  });
});
