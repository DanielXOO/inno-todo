import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { UserReducer } from './Users/Reducers/UserReducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);
const router = connectRouter(history);
export const Store = createStore(
  combineReducers({ router, UserReducer }),
  compose(applyMiddleware(middleware))
);
