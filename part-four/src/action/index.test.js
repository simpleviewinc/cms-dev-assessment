import { setListings } from './index';

describe('Actions', () => {

    it('should return an object with type', () => {
      const expected = {
        type: 'SET_LISTINGS',
        listings: {}
      };
      const result = setListings({});
      expect(result).toEqual(expected);
    });
});