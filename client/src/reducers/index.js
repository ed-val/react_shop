import { combineReducers } from 'redux';
import authReducer from './authReducer';
import headerReducer from './headerReducer';
import homeReducer from './homeReducer';
import { reducer as reduxForm } from 'redux-form'; //<- this syntax is really useful

export default combineReducers({
  auth: authReducer,
  header: headerReducer,
  home: homeReducer,
  form: reduxForm,
});
