import { category } from '../category';

describe('category', () => {

    it("should have a default state", () => {
      const defaultState =  'all';
      const mockAction = {
        type: 'DEFAULT'
      };
      const result = category(undefined, mockAction);
      expect(result).toEqual(defaultState);
    });

    it('should action.category when action.type is set category', () => {
      const mockState = 'listings';
      const mockAction = {
        type: 'FILTER_CATEGORY',
        category: 'listings'
      };
      const result = category(undefined, mockAction);
      expect(result).toEqual(mockState);
    });
});