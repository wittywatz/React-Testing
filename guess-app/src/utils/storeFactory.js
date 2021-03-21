import { createStore } from 'redux';
import reducer from '../redux/reducers';

export const storeFactory = (initialState) => {
  return createStore(reducer, initialState);
};
