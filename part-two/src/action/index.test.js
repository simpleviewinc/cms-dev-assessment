import { setListings, setEvents, setOffers, filterCategory } from './index';

describe('Actions', () => {

    it('should return an object with type - setListings', () => {
      const expected = {
        type: 'SET_LISTINGS',
        listings: {}
      };
      const result = setListings({});
      expect(result).toEqual(expected);
    });

    it('should return an object with type - setEvents', () => {
      const expected = {
        type: 'SET_EVENTS',
        events: {}
      };
      const result = setEvents({});
      expect(result).toEqual(expected);
    });

    it('should return an object with type - setOffers', () => {
      const expected = {
        type: 'SET_OFFERS',
        offers: {}
      };
      const result = setOffers({});
      expect(result).toEqual(expected);
    });

    it('should return an object with type - filterCategory', () => {
      const expected = {
        type: 'FILTER_CATEGORY',
        category: 'hello'
      };
      const result = filterCategory('hello');
      expect(result).toEqual(expected);
    });
});