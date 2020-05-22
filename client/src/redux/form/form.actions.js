import FormActionTypes from './form.types';

export const startSendForm = (contactInformation) => ({
  type: FormActionTypes.START_SEND_FORM,
  payload: contactInformation,
});

export const sendFormSuccess = (form) => ({
  type: FormActionTypes.SEND_FORM_SUCCESS,
  payload: form,
});

export const sendFormFailure = (error) => ({
  type: FormActionTypes.SEND_FORM_FAILURE,
  payload: error,
});

export const resetFormAfterSuccess = () => ({
  type: FormActionTypes.RESET_FORM_AFTER_SUCCESS,
});
