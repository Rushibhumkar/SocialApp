import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const navigation = useNavigation();
  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
      navigation.navigate('OtpVerify', {confirm: confirmation});
    } catch (error) {
      console.error('Error during sign-in:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#6d38c3'} barStyle={'light-content'} />
      <Text style={styles.text}>Welcome to</Text>
      <Image
        style={styles.artboardcopy}
        source={{
          uri: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/45558901793/7323/c391/e711/ffc220fd240ae671f55ff582770ce06f.png',
        }}
      />
      <View style={styles.frame_1}>
        <Text style={styles.text_1}>Sign Up or Login</Text>
        <View style={styles.frame_730}>
          <View style={styles.frame_729}>
            <View style={styles.frame_726}>
              <Image
                style={styles.emojies}
                source={{
                  uri: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/45558901314/f8f7/167e/7fb4/a06c5485bc7b0b19f0154cc562fde15e.png',
                }}
              />
              <Text style={styles.text_2}>+91</Text>
            </View>
            <TextInput
              style={styles.inputField}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholder="Please enter your number"
              placeholderTextColor="#7f8387"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.frame_727}
            onPress={signInWithPhoneNumber}>
            <Text style={styles.text_4}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.frame_17}>
        <Text style={styles.text_5}>Have a</Text>
        <Text style={styles.text_7}> Referral Code?</Text>
      </Text>
      <Text style={styles.privacyPolicy}>
        <Text style={styles.text_8}>By continuing you agree to the app's </Text>
        <Text style={styles.text_9}>Terms of Services</Text>
        <Text style={styles.text_10}> and </Text>
        <Text style={styles.text_11}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#6D38C3',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 0,
    shadowColor: 'black',
    shadowOpacity: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
  },

  text: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 48,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 155,
  },

  artboardcopy: {
    width: 172,
    height: 39,
    marginTop: 14,
  },

  frame_1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 1,
    gap: 24,
    width: '100%',
    marginTop: 151,
  },

  text_1: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    color: '#ffffff',
  },

  frame_730: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },

  frame_729: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
  },

  frame_726: {
    width: 81,
    height: 41,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5.5,
    gap: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(19, 21, 35, 0.1)',
    backgroundColor: '#ffffff',
  },

  emojies: {
    width: 30,
    height: 30,
  },

  text_2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#131523',
  },

  inputField: {
    width: 264,
    height: 41,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(19, 21, 35, 0.1)',
    backgroundColor: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
    color: '#7f8387',
  },

  frame_727: {
    width: 353,
    height: 41,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  text_4: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6d38c3',
  },

  frame_17: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    marginTop: 32,
    textAlign: 'center',
  },

  text_5: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
  },

  text_7: {
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    color: '#000000',
  },

  privacyPolicy: {
    width: '100%',
    textAlign: 'center',
    marginTop: 105,
  },

  text_8: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },

  text_9: {
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    color: '#000000',
  },

  text_10: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },

  text_11: {
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    color: '#000000',
  },
});

export default Login;
