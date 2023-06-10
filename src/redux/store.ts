import { createStore } from 'redux';
import { UserReducer } from './Users/Reducers/UserReducer';

export const Store = createStore(UserReducer);
