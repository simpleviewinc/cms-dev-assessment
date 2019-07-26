import { events } from '../events';

describe('events', () => {

    it('should have a default state', () => {
      const defaultState = { data: [] };
      const mockAction = {
        type: 'DEFAULT'
      };
      const result = events(undefined, mockAction);
      expect(result).toEqual(defaultState);
    });

    it('should action.events when action.type is set events', () => {
      const mockState = { data: [{}, {}]};
      const mockAction = {
        type: 'SET_EVENTS',
        events: { data: [{}, {}]}
      };
      const result = events(undefined, mockAction);
      expect(result).toEqual(mockState);
    });
});