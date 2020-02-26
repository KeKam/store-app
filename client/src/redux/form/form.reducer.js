import FormActionTypes from './form.types';

const DEFAULT_STATE = {
  form: null,
  isSending: false,
  error: null
};

const formReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FormActionTypes.START_SEND_FORM:
      return {
        ...state,
        isSending: true,
        error: null
      };
    case FormActionTypes.SEND_FORM_SUCCESS:
      return {
        ...state,
        form: action.payload,
        isSending: false,
        error: null
      };
    case FormActionTypes.SEND_FORM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSending: false
      };
    default:
      return state;
  }
};

export default formReducer;
