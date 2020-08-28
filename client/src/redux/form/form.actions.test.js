import FormActionTypes from './form.types';
import {
  startSendForm,
  sendFormSuccess,
  sendFormFailure,
  resetFormAfterSuccess,
} from './form.actions';

describe('Form actions', () => {
  it('should create startSendForm action', () => {
    const mockContactInformation = {
      name: 'Tester',
      email: 'testuser@gmail.com',
      description: 'Need help testing',
    };

    const action = startSendForm(mockContactInformation);

    expect(action.type).toEqual(FormActionTypes.START_SEND_FORM);
    expect(action.payload).toEqual(mockContactInformation);
  });

  it('should create sendFormSuccess action', () => {
    const mockForm = {
      name: 'Tester',
      email: 'testuser@gmail.com',
      description: 'Need help testing',
    };

    const action = sendFormSuccess(mockForm);

    expect(action.type).toEqual(FormActionTypes.SEND_FORM_SUCCESS);
    expect(action.payload).toEqual(mockForm);
  });

  it('should create sendFormFailure action', () => {
    const mockError = {
      error: 'errored',
    };

    const action = sendFormFailure(mockError);

    expect(action.type).toEqual(FormActionTypes.SEND_FORM_FAILURE);
    expect(action.payload).toEqual(mockError);
  });

  it('should create resetFormAfterSuccess action', () => {
    expect(resetFormAfterSuccess().type).toEqual(
      FormActionTypes.RESET_FORM_AFTER_SUCCESS
    );
  });
});
