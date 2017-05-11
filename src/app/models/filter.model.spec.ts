import { Filter } from './filter.model';

describe('Filter model', () => {
  describe('constructor()', () => {

    let filter;

    it('should init with correct values', () => {
      filter = new Filter(' Test ');

      expect(filter.type).toEqual('Test');
      expect(filter.selected).toBeFalsy();
    });

    it('should trim title.', () => {
      filter = new Filter(' Test ');
      expect(filter.type).toEqual('Test');
    });
  });
});
