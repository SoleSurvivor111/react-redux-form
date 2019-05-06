import { combineReducers } from 'redux';
import fields from 'reducers/fields';
import submit from 'reducers/submit';

export default combineReducers({
  fields,
  submit,
});
