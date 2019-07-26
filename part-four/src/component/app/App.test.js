import React from 'react';
import { shallow } from 'enzyme'
import { App, mapDispatchToProps }from './App';
import { setListings } from '../../action';

const mockListings = [];
const mockSetListings = jest.fn();

describe('App', () => {

  describe('App', () => {
    
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <App setListings={ mockSetListings }/>
      );
    });

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should return an array when randomizeList is invoke', () => {
      const returnedValue = wrapper.instance().randomizeList([]);
      expect(typeof returnedValue).toBe('object');
    });

    it('should return an array when randomizePageLayout is invoke', () => {
      const returnedValue = wrapper.instance().randomizePageLayout();
      expect(typeof returnedValue).toBe('object');
    });

    it('should return an array when assignGridLayout is invoke', () => {
      const returnedValue = wrapper.instance().assignGridLayout([],[]);
      expect(typeof returnedValue).toBe('object');
    });

  });

  describe('mapDispatchToProps', () => {

    it('should call dispach for setListings', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setListings(mockListings);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setListings(mockListings);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});