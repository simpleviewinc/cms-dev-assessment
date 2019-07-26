import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const mockData = {
  title: 'test',
  description: 'hello world',
  mediaurl: 'http://www.hello.com'
};

describe('Card', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card data={ mockData }/>
    );
  });

  it('should have a snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});