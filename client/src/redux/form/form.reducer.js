import FormActionTypes from './form.types';

const DEFAULT_STATE = {
  formWasSent: null,
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
        formWasSent: action.payload,
        isSending: false,
        error: null
      };
    case FormActionTypes.SEND_FORM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSending: false
      };
    case FormActionTypes.RESET_FORM_AFTER_SUCCESS:
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default formReducer;
