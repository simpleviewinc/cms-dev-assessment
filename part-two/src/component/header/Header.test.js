import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps, mapStateToProps }from './Header';
import { filterCategory } from '../../action';

const mockFilter = 'all';

describe('Header', () => {

  describe('Header', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Header />
      )
    })

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return only what is needed', () => {
      const mockState = {
        listings: {},
        offers: {},
        events: {},
        category: 'all'
      };
      const expected = {
        category: 'all'
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispach for filterCategory', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = filterCategory(mockFilter);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.filterCategory(mockFilter);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});