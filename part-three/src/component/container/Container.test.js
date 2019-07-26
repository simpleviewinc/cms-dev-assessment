import React from 'react';
import { shallow } from 'enzyme'
import { Container, mapStateToProps }from './Container';

const mockListings = [[],[],[],[]];

describe('Container', () => {

  describe('Container', () => {
    
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Container listings={ mockListings }/>
      )
    })

    it('should have a snap shot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should change state when button is click before setTimeout', () => {
      jest.useFakeTimers();
      expect(wrapper.state('animation')).toEqual('');
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.state('animation')).toEqual('exit');
    });

    it('should change state when button is click after setTimeout', () => {
      jest.useFakeTimers();
      expect(wrapper.state('currentPage')).toEqual(0);
      wrapper.find('button').at(1).simulate('click');
      setTimeout(() => {
        expect(wrapper.state('currentPage')).toEqual(1);
      }, 500);
      jest.runAllTimers();
    });
  });

  describe('mapStateToProps', () => {

    it('should return only what is needed', () => {
      const mockState = {
        listings: {},
        hello: 'hello'
      };
      const expected = {
        listings: {},
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});