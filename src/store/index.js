import { combineReducers, createStore,applyMiddleware, compose } from 'redux';
import ProductReducer from '../reducers/product-reducer';
import CartReducer from '../reducers/cart-reducer';
import ReduxThunk from 'redux-thunk';
import LoginReducer from '../reducers/login-reducer';

const Reducers = combineReducers({
    productList : ProductReducer,
    loginStatus : LoginReducer,
    cart:CartReducer
});




export const Store = createStore(Reducers, applyMiddleware(ReduxThunk));