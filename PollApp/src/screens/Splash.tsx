import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
      <Text style={{color: '#fff', fontSize: 40, fontWeight: '800'}}>
        Poll Pro
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 12,
          fontWeight: '800',
          position: 'absolute',
          bottom: 8,
        }}>
        Post polls and get reviews by community
      </Text>
    </View>
  );
};

export default Splash;
