import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import productsReducer from './productsSlice';

const rootReducer = combineReducers({
  
  products: productsReducer,
 
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
