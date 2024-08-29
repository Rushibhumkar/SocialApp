import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import OTPInput from '../components/OtpInput';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Ionicons';

const OtpVerify = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const handleOtpChange = otp => {
    setOtp(otp);
  };

  const handleVerify = () => {
    console.log('Entered OTP:', otp);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <TouchableOpacity
        style={{padding: 12}}
        onPress={() => navigation.goBack()}>
        <BackIcon size={24} color={'#000'} name="arrow-back" />
      </TouchableOpacity>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={{width: '70%', color: 'grey', marginBottom: 20}}>
        Please enter OTP received at your mobile number 9*****455
      </Text>
      <OTPInput onChange={handleOtpChange} />
      <Text
        style={{
          marginTop: 60,
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Didn't receive OTP
      </Text>
      <Text
        style={{
          marginVertical: 4,
          color: '#6D38C3',
          textDecorationLine: 'underline',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 40,
        }}>
        Resend OTP
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    marginTop: 80,
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#6D38C3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OtpVerify;
