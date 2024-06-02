import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
interface Props {
  navigation: any;
}

const Signup: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [name, setName] = useState<string>('');

  const register = async () => {
    if (name != '') {
      if (
        String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          )
      ) {
        if (pass != '' && pass.length > 4) {
          try {
            await firestore().collection('users').add({
              name,
              email,
              pass,
            });
            console.log('user register successfully');
          } catch (err) {
            console.log(err);
          }
        } else {
          Alert.alert('Please Enter Valid Password');
        }
      } else {
        Alert.alert('Please Enter Valid Email');
      }
    } else {
      Alert.alert('Please Enter Valid Name');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: '#000',
          textAlign: 'center',
          marginTop: 50,
        }}>
        Create Account
      </Text>
      <CustomTextInput
        placeholder={'Enter Name'}
        value={name}
        onChangeText={(txt: any) => setName(txt)}
        mt={20}
        // warn={'Please Enter valid email'}
      />
      <CustomTextInput
        placeholder={'Enter Email'}
        value={email}
        onChangeText={(txt: any) => setEmail(txt)}
        mt={20}
        // warn={'Please Enter valid email'}
      />
      <CustomTextInput
        placeholder={'Enter Password'}
        value={pass}
        onChangeText={(txt: any) => setPass(txt)}
        mt={20}
      />
      <Text
        style={{
          alignSelf: 'flex-end',
          marginRight: 12,
          padding: 8,
          fontWeight: '600',
          color: '#000',
        }}>
        forget password?
      </Text>
      <CustomButton
        title={'Sign Up'}
        onClick={() => {
          register();
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          alignSelf: 'center',
          marginTop: 40,
          padding: 8,
        }}
        onPress={() => navigation.navigate('Login')}>
        {'Already have Account ? '}
        <Text style={{textDecorationLine: 'underline', color: '#4958c9'}}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
