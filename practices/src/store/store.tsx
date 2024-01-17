// Import necessary functions from redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import addressReducer from './addressSlice';

// Create and export the store
const store = configureStore({
  reducer: {
    address: addressReducer,
  },
});

export default store;
