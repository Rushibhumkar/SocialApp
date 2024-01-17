import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createAddress,
  deleteAddress,
  updateAddress,
  selectAddresses,
} from '../practices/src/store/addressSlice';

const Home = ({navigation}) => {
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

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{color: '#000', fontSize: 22}}>Addresses:</Text>
      {addresses.map(address => (
        <View key={address.id}>
          <Text style={{color: 'red'}}>{address.text}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8,
            }}
            onPress={() => handleDeleteAddress(address.id)}>
            <Text style={{color: '#fff'}}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8,
            }}
            onPress={() =>
              handleUpdateAddress(address.id, {text: 'Updated Address'})
            }>
            <Text style={{color: '#fff'}}>UpdateAddress</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
        }}
        onPress={() => navigation.navigate('Address')}>
        <Text style={{color: '#fff'}}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
