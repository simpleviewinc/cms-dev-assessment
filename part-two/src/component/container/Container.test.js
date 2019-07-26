import React from 'react';
import { shallow } from 'enzyme';
import { Container, mapStateToProps }from './Container';

const mockListings = { data: [] };
const mockEvents = { data: [] };
const mockOffers = { data: [] };

describe('Container', () => {

  describe('Container', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Container listings={ mockListings }
                    offers={ mockOffers }
                    events={ mockEvents } />
      );
    });

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should return an array when filterArray is invoke', () => {
      const returnedValue = wrapper.instance().filterArray();
      expect(typeof returnedValue).toBe('object');
    });
  });

  describe('mapStateToProps', () => {

    it('should return only what is needed', () => {
      const mockState = {
        listings: {},
        offers: {},
        events: {},
        category: 'all',
        hello: 'hello'
      };
      const expected = {
        listings: {},
        offers: {},
        events: {},
        category: 'all',
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});