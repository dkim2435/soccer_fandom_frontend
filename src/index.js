import { Provider } from 'react-redux';
//to use the middleware structure
import { createStore, applyMiddleware } from 'redux';
//to use the think strucuter
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//store, thunk will be used to provide information
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
