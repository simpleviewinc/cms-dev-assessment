import { listings } from '../listings';

describe('listings', () => {
  
    it("should have a default state", () => {
      const defaultState = { data: [] };
      const mockAction = {
        type: 'DEFAULT'
      };
      const result = listings(undefined, mockAction);
      expect(result).toEqual(defaultState);
    });

    it('should action.listings when action.type is set listings', () => {
      const mockState = { data: [{}, {}]};
      const mockAction = {
        type: 'SET_LISTINGS',
        listings: { data: [{}, {}]}
      };
      const result = listings(undefined, mockAction);
      expect(result).toEqual(mockState);
    });
});