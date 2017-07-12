import cart from './cart_reducer';
import accounts from './accounts_reducer';
import users from './users_reducer';
import treeData from './org-charts_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart,
  accounts,
  users,
  treeData
});

export default rootReducer;