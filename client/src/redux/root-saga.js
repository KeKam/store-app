import { all, call } from 'redux-saga/effects';

import { collectionSagas } from './collection/collection.sagas';
import { cartSagas } from './cart/cart.sagas';
import { userSagas } from './user/user.sagas';
import { formSagas } from './form/form.sagas';

export default function* rootSaga() {
  yield all([
    call(collectionSagas),
    call(cartSagas),
    call(userSagas),
    call(formSagas),
  ]);
}
