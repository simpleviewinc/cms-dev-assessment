import React from 'react';
import { shallow } from 'enzyme';
import { Container, mapStateToProps }from './Container';

const mockListings = { data: [] }

describe('Container', () => {

  describe('Container', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Container listings={ mockListings } />
      );
    });

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    
    it('should return only what is needed', () => {
      const mockState = {
        listings: [],
        hello: 'hello'
      };
      const expected = {
        listings: []
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});