import axios from 'axios';
import API from '../api';
// the syntax below is valid and used when the father fx only
// makes a single return and the children takes a single param
export const fetchUser = () => async dispatch => {
  dispatch({ type: 'FETCH_USER' });
  try {
    const res = await axios.get('api/current_user');
    if (res) dispatch({ type: 'FETCH_USER_SUCCESS', payload: res.data });
    if (!res) dispatch({ type: 'FETCH_USER_FAIL'});
  } catch (err) {
    console.log(err);
  }
};

export const handleToken = (token) => async dispatch => {
  dispatch({ type: 'FETCH_USER' });
  try {
    const res = await axios.post('/api/stripe', token);
    if (res) dispatch({ type: 'FETCH_USER_SUCCESS', payload: res.data });
    if (!res) dispatch({ type: 'FETCH_USER_FAIL'});
  } catch (err) {
    console.log(err);
  }
};

export const landingIsActive = (value) => {
  return { type: 'LANDING_IS_ACTIVE', payload: value };
};

export const showForm = (value) => {
  return { type: 'SHOW_FORM', payload: value };
};

export const updateOrder = (newItems) => {
  return { type: 'UPDATE_ORDER', payload: newItems };
};

export const getOrder = () => async dispatch => {
  dispatch({ type: 'GET_ORDER' });
  try {
    const res = await API.getOrder();
    if (!res.error) {
      dispatch({ 
        type: 'GET_ORDER_SUCCESS', 
        payload: { items: res.items, number: res.number, currency: res.currency } 
      });
      return;
    }
    dispatch({ type: 'GET_ORDER_FAIL', payload: res.errorMsg });
  } catch (err) {
    dispatch({ type: 'GET_ORDER_FAIL', payload: err });
    console.log(err);
  }
};
