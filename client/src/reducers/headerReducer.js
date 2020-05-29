const INITIAL_STATE = {
  formIsVisible: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_FORM': {
      return { ...state, formIsVisible: action.payload };
    }
    default:
      return state;
  }
}
