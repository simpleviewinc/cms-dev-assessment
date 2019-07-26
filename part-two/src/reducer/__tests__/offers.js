import { offers } from '../offers';

describe('offers', () => {

    it("should have a default state", () => {
      const defaultState = { data: [] };
      const mockAction = {
        type: 'DEFAULT'
      };
      const result = offers(undefined, mockAction);
      expect(result).toEqual(defaultState);
    });

    it('should action.offers when action.type is set offers', () => {
      const mockState = { data: [{}, {}]};
      const mockAction = {
        type: 'SET_OFFERS',
        offers: { data: [{}, {}]}
      };
      const result = offers(undefined, mockAction);
      expect(result).toEqual(mockState);
    });
});