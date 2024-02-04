// addressSlice.js
import {createSlice} from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [], // Initialize addresses as an empty array
  },
  reducers: {
    createAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        address => address.id !== action.payload,
      );
    },
    updateAddress: (state, action) => {
      const {id, updatedData} = action.payload;
      const index = state.addresses.findIndex(address => address.id === id);
      if (index !== -1) {
        state.addresses[index] = {...state.addresses[index], ...updatedData};
      }
    },
  },
});

export const {createAddress, deleteAddress, updateAddress} =
  addressSlice.actions;
export const selectAddresses = state => state.address.addresses;
export default addressSlice.reducer;
