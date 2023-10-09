import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when there is NO data', () => {
    it('should return an empty array', () => {
      expect(service.search([], 'test'))
        .withContext('search text is equal to "test"')
        .toEqual([]);

      expect(service.search([], ''))
        .withContext('search text is an empty string')
        .toEqual([]);
    });
  });

  describe('when there is data', () => {
    it('should return only one item', () => {
      const fakeData = ['test', 'other thing'];

      expect(service.search(fakeData, 'test')).toEqual(['test']);
    });

    it('should return 2 items', () => {
      const fakeData = ['test', 'other thing', 'test'];

      expect(service.search(fakeData, 'test')).toEqual(['test', 'test']);
    });

    it('should return an empty array', () => {
      const fakeData = ['test', 'other thing'];

      expect(service.search(fakeData, 'abc')).toEqual([]);
    });

    describe('case sensitive check', () => {
      it('should return an array with 2 items', () => {
        const fakeData = ['TeSt', 'other tEst'];
  
        expect(service.search(fakeData, 'tes')).toEqual(['TeSt', 'other tEst']);
      });  

      it('should return an empty array', () => {
        const fakeData = ['TeSt', 'other tEst'];
  

        expect(service.search(fakeData, 'tt')).toEqual([]);
      });  
    });

  });

  describe('when the search text param is invalid', () => {
    it('should return an empty array', () => {
      const fakeData = ['test', 'other thing', ''];

      expect(service.search(fakeData, '')).toEqual([]);
    });
  });
});
