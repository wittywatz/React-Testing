import { createStore, applyMiddleware } from 'redux';
import reducer from '../redux/reducers';
import { middleware } from '../redux/store';

export const storeFactory = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(...middleware));
};
