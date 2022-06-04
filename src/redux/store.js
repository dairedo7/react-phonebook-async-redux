import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { items, loading } from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  items,
  filter: filterReducer,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store); // wrapper for store to update the localStorage

// fetch.then(x => dispatch(action(x))).catch(y => dispatch(action(y)));
