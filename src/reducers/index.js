import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import accounts from './accounts_reducer';
import users from './users_reducer';
import treeData from './org-charts_reducer';

const rootReducer = combineReducers({
  accounts,
  users,
  treeData
});

export default rootReducer;