import {createSlice} from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [],
  },
  reducers: {
    createAddress: ({state, action}: any) => {
      state.addresses.push(action.payload);
    },
    deleteAddress: ({state, action}: any) => {
      state.addresses = state.addresses.filter(
        (address: any) => address.id !== action.payload,
      );
    },
    updateAddress: ({state, action}: any) => {
      const {id, updatedData} = action.payload;
      const index = state.addresses.findIndex(
        (address: any) => address.id === id,
      );
      if (index !== -1) {
        state.addresses[index] = {...state.addresses[index], ...updatedData};
      }
    },
  },
});

export const {createAddress, deleteAddress, updateAddress} =
  addressSlice.actions;
export const selectAddresses = (state: any) => state.address.addresses;
export default addressSlice.reducer;
