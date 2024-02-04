// Home.js
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteAddress,
  updateAddress,
  selectAddresses,
} from '../practices/src/store/addressSlice';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAddresses);

  const handleDeleteAddress = id => {
    dispatch(deleteAddress(id));
  };

  const handleUpdateAddress = (id, updatedData) => {
    dispatch(updateAddress({id, updatedData}));
  };

  const handleAddAddress = () => {
    navigation.navigate('Address');
  };
  console.log({addresses});
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{color: '#000', fontSize: 22}}>Addresses:</Text>
      <FlatList
        style={{backgroundColor: 'lightgrey', flex: 1}}
        contentContainerStyle={{paddingBottom: 20}}
        data={addresses}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              backgroundColor: 'red',
              borderRadius: 8,
              marginTop: 8,
              marginHorizontal: 12,
              padding: 8,
            }}>
            <Text style={{color: '#fff'}}>
              Landmark:{item.LandMark}
              {'\n'}
              Pincode:{item.pincode}
              {'\n'}
              Area:{item.Area}
              {'\n'}
              City:{item.city}
              {'\n'}
              FullAddress:{item.fullAddress}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                margin: 4,
              }}
              onPress={() => handleDeleteAddress(item.id)}>
              <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                margin: 4,
              }}
              onPress={() =>
                handleUpdateAddress(item.id, {text: 'Updated Address'})
              }>
              <Text style={{color: '#fff'}}>UpdateAddress</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{backgroundColor: '#fff', padding: 12}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            width: '90%',
          }}
          onPress={handleAddAddress}>
          <Text style={{color: '#fff'}}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
