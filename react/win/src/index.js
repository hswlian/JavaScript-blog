import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {combineReducers} from 'redux';

const  productsReducer = function (state,action) {
    return state;
};
const  cartReducer = function (state,action) {
    return state;
};
const allReducers = {
    products:productsReducer,
    shoppingCart:cartReducer
}
const store = createStore(allReducers);

console.log('init state:',store.getState());
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
