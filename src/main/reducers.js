import { combineReducers } from 'redux'
import navReducer from '../routes/navReducer'
import authReducer from '../auth/authReducer'

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer
});

export default AppReducer;
