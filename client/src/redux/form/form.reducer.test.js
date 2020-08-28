import FormActionTypes from './form.types';
import formReducer from './form.reducer';

const DEFAULT_STATE = {
  formWasSent: null,
  isSending: false,
  error: null,
};

describe('formReducer', () => {
  it('should return default state', () => {
    expect(formReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should set isSending to true and error to null if startSendForm', () => {
    expect(
      formReducer(DEFAULT_STATE, {
        type: FormActionTypes.START_SEND_FORM,
      })
    ).toEqual({ ...DEFAULT_STATE, isSending: true, error: null });
  });

  it('should set isSending to false, error to null and formWasSent to payload if sendFormSuccess', () => {
    const mockForm = {
      name: 'TestUser',
      email: 'testuser@gmail.com',
      description: 'Need help testing',
    };

    expect(
      formReducer(DEFAULT_STATE, {
        type: FormActionTypes.SEND_FORM_SUCCESS,
        payload: mockForm,
      })
    ).toEqual({
      ...DEFAULT_STATE,
      isSending: false,
      error: null,
      formWasSent: mockForm,
    });
  });

  it('should set isSending to false and error to payload if sendFormFailure', () => {
    const mockError = {
      error: 'errored',
    };

    expect(
      formReducer(DEFAULT_STATE, {
        type: FormActionTypes.SEND_FORM_FAILURE,
        payload: mockError,
      })
    ).toEqual({
      ...DEFAULT_STATE,
      isSending: false,
      error: mockError,
    });
  });

  it('should return default state if resetAfterSuccess', () => {
    expect(
      formReducer(DEFAULT_STATE, {
        type: FormActionTypes.RESET_FORM_AFTER_SUCCESS,
      })
    ).toEqual(DEFAULT_STATE);
  });
});
