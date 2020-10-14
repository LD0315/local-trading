import { createStore, combineReducers } from 'redux';
import { productListReducer } from './reducders/productReducers';

const inistialState = {}
const reducer = combineReducers({
    //reducer: return new state based on that action
    productList: productListReducer, 
})
const store = createStore(reducer, inistialState);
