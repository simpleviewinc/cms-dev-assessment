import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps }from './App';
import { setListings, setEvents, setOffers  } from '../../action';

const mockListings = {};
const mockEvents = {};
const mockOffers = {};

describe('App', () => {

  describe('App', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
    });

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

    it('should call dispach for setEvents', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setEvents(mockEvents);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setEvents(mockEvents);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispach for setOffers', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setOffers(mockOffers);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOffers(mockOffers);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});