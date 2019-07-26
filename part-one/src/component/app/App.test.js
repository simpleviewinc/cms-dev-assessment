import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps }from './App';
import { setListings } from '../../action';

const mockListings = {}

describe('App', () => {

  describe('App', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
    })

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot();
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

