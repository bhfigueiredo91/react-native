import {configureStore} from '@reduxjs/toolkit';
import * as collections from './collections.duck';

const store = configureStore({
  reducer: {
    collections: collections.reducer,
  },
});

export default store;
