const INITIAL_STATE = {
  loading: false,
  requestError: false,
  errorMessage: '',
  items: [],
  currency: '',
  number: '',
};

export default function(state = INITIAL_STATE, { type, payload }) {
  // console.log(action);
  switch (type) {
    case 'RESET_ERROR': {
      return { ...state, requestError: false };
    }
    case 'UPDATE_ORDER': {
      return { ...state, items: payload };
    }
    case 'GET_ORDER': {
      return { ...state, loading: true, errorMessage: '', requestError: false };
    }
    case 'GET_ORDER_FAIL': {
      return { 
        ...state, 
        loading: false, 
        errorMessage: payload, 
        requestError: true,
      };
    }
    case 'GET_ORDER_SUCCESS': {
      return { 
        ...state, 
        loading: false,
        items: payload.items,
        number: payload.number,
        currency: payload.currency,
        errorMessage: '', 
        requestError: false,
      };
    }
    default:
      return state;
  }
}
