import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const mockData = {
  title: 'hello',
  number: 1,
  mediaurl: 'http://www.hello.com'
};
const mockAnimation = '';
const mockGridPlacement = '';

describe('Card', () => {
    
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card data={ mockData } 
            animation={ mockAnimation } 
            gridPlacement={ mockGridPlacement }/>
    );
  });

  it('should have a snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });;
});