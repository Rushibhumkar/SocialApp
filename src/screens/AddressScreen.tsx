import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {UserType} from './UserContext';
import jwt_decode from 'jwt-decode';

const AddressScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const {userId, setUserId} = useContext(UserType);
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);
  console.log(userId);
  const handleAddAddress = () => {
    const address = {
      name,
      mobileNo,
      houseNo,
      street,
      landmark,
      postalCode,
    };

    axios
      .post('http://localhost:8000/addresses', {userId, address})
      .then(response => {
        Alert.alert('Success', 'Addresses added successfully');
        setName('');
        setMobileNo('');
        setHouseNo('');
        setStreet('');
        setLandmark('');
        setPostalCode('');

        setTimeout(() => {
          navigation.goBack();
        }, 500);
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to add address');
        console.log('error', error);
      });
  };
  return (
    <ScrollView style={{marginTop: Platform.OS == 'ios' ? 50 : 0}}>
      <View style={{height: 50, backgroundColor: '#00CED1'}} />

      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
          Add a new Address
        </Text>

        <TextInput
          placeholderTextColor={'grey'}
          placeholder="India"
          editable={false}
          style={{
            padding: 10,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            color: '#000',
          }}
        />

        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Full name (First and last name)
          </Text>

          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder="Enter your name"
          />
        </View>

        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Mobile numebr
          </Text>

          <TextInput
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder="Mobile No"
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Flat,House No,Building,Company
          </Text>

          <TextInput
            value={houseNo}
            onChangeText={text => setHouseNo(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder=""
          />
        </View>

        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Area,Street,sector,village
          </Text>
          <TextInput
            value={street}
            onChangeText={text => setStreet(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder=""
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Landmark
          </Text>
          <TextInput
            value={landmark}
            onChangeText={text => setLandmark(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder="Eg near appollo hospital"
          />
        </View>

        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Pincode
          </Text>

          <TextInput
            value={postalCode}
            onChangeText={text => setPostalCode(text)}
            placeholderTextColor={'grey'}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              color: '#000',
            }}
            placeholder="Enter Pincode"
          />
        </View>

        <TouchableOpacity
          onPress={handleAddAddress}
          style={{
            backgroundColor: '#FFC72C',
            padding: 19,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
