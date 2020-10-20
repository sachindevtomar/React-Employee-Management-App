import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Root Component
import App from './App';
import * as serviceWorker from './serviceWorker';
//Navigation
import { BrowserRouter } from 'react-router-dom'
//Middleware
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
