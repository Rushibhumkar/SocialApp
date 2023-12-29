import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        translucent={false}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Image
          source={require('../assets/images/chat-box.png')}
          style={{height: 200, aspectRatio: 1, backgroundColor: '#fff'}}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
