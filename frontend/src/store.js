import { createStore, combineReducers } from 'redux';
import { productListReducer } from './reducers/productReducers';

const inistialState = {}
const reducer = combineReducers({
    //reducer: return new state based on that action
    productList: productListReducer, 
})
const store = createStore(reducer, inistialState);

export default store;
