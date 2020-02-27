import { createSelector } from 'reselect';

const selectForm = state => state.form;

export const selectIsSendingForm = createSelector(
  [selectForm],
  form => form.isSending
);

export const selectFormError = createSelector([selectForm], form => form.error);

export const selectFormWasSent = createSelector(
  [selectForm],
  form => form.formWasSent
);
