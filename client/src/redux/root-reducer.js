import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import directoryReducer from '../redux/directory/directory.reducer';
import collectionReducer from '../redux/collection/collection.reducer';
import formReducer from '../redux/form/form.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer,
  form: formReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

export default persistReducer(persistConfig, rootReducer);
