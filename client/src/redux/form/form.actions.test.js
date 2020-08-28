import FormActionTypes from './form.types';
import {
  startSendForm,
  sendFormSuccess,
  sendFormFailure,
  resetFormAfterSuccess,
} from './form.actions';

describe('Form actions', () => {
  it('should create startSendForm action', () => {
    expect(startSendForm().type).toEqual(FormActionTypes.START_SEND_FORM);
  });

  it('should create sendFormSuccess action', () => {
    expect(sendFormSuccess().type).toEqual(FormActionTypes.SEND_FORM_SUCCESS);
  });

  it('should create sendFormFailure action', () => {
    expect(sendFormFailure().type).toEqual(FormActionTypes.SEND_FORM_FAILURE);
  });

  it('should create resetFormAfterSuccess action', () => {
    expect(resetFormAfterSuccess().type).toEqual(
      FormActionTypes.RESET_FORM_AFTER_SUCCESS
    );
  });
});
