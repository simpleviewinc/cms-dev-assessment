import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
