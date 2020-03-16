import React from 'react';
import ReactDOM from 'react-dom';
import Listings from './Listings'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    setTimeout(function(){        
        const div = document.createElement('div');
        ReactDOM.render(<Listings />, div);
        ReactDOM.unmountComponentAtNode(div);
    }, 2000)
});

it('renders the UI as expected',() => {
    setTimeout(function(){
        const tree = renderer
            .create(<Listings />)
            .toJSON();
        expect(tree).toMatchSnapshot();  
    }, 2000)
  });
  //setTimeout for API