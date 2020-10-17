import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const inistialState = { cart: { cartItems }, userSignin: { userInfo } };
const reducer = combineReducers({
    //reducer: return new state based on that action
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// thunk is a middleware for redux, it allows us to run async operation inside redux
const store = createStore(
    reducer, 
    inistialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;
