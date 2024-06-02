import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

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
        Login
      </Text>
      <CustomTextInput
        placeholder={'Enter email'}
        value={email}
        onChangeText={(txt: any) => setEmail(txt)}
        mt={20}
        // warn={'Please Enter valid email'}
      />
      <CustomTextInput
        placeholder={'Enter password'}
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
        title={'Login'}
        onClick={() => {
          navigation.navigate('Home');
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
        onPress={() => navigation.navigate('Signup')}>
        {'New User ? '}
        <Text style={{textDecorationLine: 'underline', color: '#4958c9'}}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Login;
