// Address.js
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {createAddress} from '../practices/src/store/addressSlice';

const Address = ({navigation}) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    Area: '',
    LandMark: '',
    city: '',
    pincode: '',
  });

  const handleCreateAddress = () => {
    const newAddress = {
      id: Date.now(),
      fullAddress: `${address.Area}, ${address.LandMark}, ${address.city}, ${address.pincode}`,
      Area: address.Area,
      LandMark: address.LandMark,
      city: address.city,
      pincode: address.pincode,
    };
    dispatch(createAddress(newAddress));
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 12}}>
      <Text style={{color: '#000', fontSize: 22, marginTop: 12}}>Area:</Text>
      <TextInput
        value={address.Area}
        onChangeText={txt => setAddress(prev => ({...prev, Area: txt}))}
        style={{borderColor: '#000', borderWidth: 0.5, color: '#000'}}
      />
      <Text style={{color: '#000', fontSize: 22, marginTop: 12}}>
        LandMark:
      </Text>
      <TextInput
        value={address.LandMark}
        onChangeText={txt => setAddress(prev => ({...prev, LandMark: txt}))}
        style={{borderColor: '#000', borderWidth: 0.5, color: '#000'}}
      />
      <Text style={{color: '#000', fontSize: 22, marginTop: 12}}>city:</Text>
      <TextInput
        value={address.city}
        onChangeText={txt => setAddress(prev => ({...prev, city: txt}))}
        style={{borderColor: '#000', borderWidth: 0.5, color: '#000'}}
      />
      <Text style={{color: '#000', fontSize: 22, marginTop: 12}}>pincode:</Text>
      <TextInput
        value={address.pincode}
        onChangeText={txt => setAddress(prev => ({...prev, pincode: txt}))}
        style={{borderColor: '#000', borderWidth: 0.5, color: '#000'}}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 12,
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={handleCreateAddress}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
