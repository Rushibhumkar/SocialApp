import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PassIcon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {}
const Login: React.FC<Props> = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          navigation.replace('Main');
        }
      } catch (err) {
        console.log('error message', err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post('http://localhost:8000/login', user)
      .then(res => {
        console.log(res);
        const token = res.data.token;
        AsyncStorage.setItem('authToken', token);
        navigation.replace('Home');
      })
      .catch(err => {
        Alert.alert('Login Error', 'Invalid Email');
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 150, height: 100, marginTop: 50}}
        source={{
          uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
        }}
      />
      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#041E42',
            }}>
            Login In to your Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#D0D0D0',
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 100,
          }}>
          <EmailIcon
            style={{marginLeft: 8}}
            name="email"
            size={32}
            color="gray"
          />
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              color: 'gray',
              width: 300,
              fontSize: 16,
            }}
            placeholder="enter your Email"
          />
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#D0D0D0',
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <PassIcon
            name="password"
            size={32}
            color="gray"
            style={{marginLeft: 8}}
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={{
              color: 'gray',
              width: 300,
              fontSize: 16,
            }}
            placeholder="enter your Password"
          />
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000'}}>Keep me logged in</Text>
          <Text style={{color: '#007FFF', fontWeight: '500'}}>
            Forgot Password
          </Text>
        </View>
        <View style={{marginTop: 80}} />
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: '#FEBE10',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 15,
          }}
          onPress={() => navigation.navigate('Main')}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
