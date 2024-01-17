import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createAddress,
  deleteAddress,
  updateAddress,
  selectAddresses,
} from '../practices/src/store/addressSlice';

const Address = ({navigation}: any) => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAddresses);

  const handleCreateAddress = () => {
    const newAddress = {id: Date.now(), text: 'New Address'};
    dispatch(createAddress(newAddress));
  };

  const handleDeleteAddress = id => {
    dispatch(deleteAddress(id));
  };

  const handleUpdateAddress = (id, updatedData) => {
    dispatch(updateAddress({id, updatedData}));
  };
  const [address, setAddresss] = useState({
    Area: '',
    LandMark: '',
    pincode: '',
    city: '',
  });
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{color: '#fff'}}>Area:</Text>
      <TextInput
        value={address.Area}
        onChangeText={txt => setAddresss(prev => ({...prev, Area: txt}))}
      />
    </View>
  );
};

export default Address;
