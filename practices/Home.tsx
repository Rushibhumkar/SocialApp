import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {sizes} from '../src/utils/Constants';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        barStyle={'default'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-SL7cGq6x0gXuc8KFur_h_Tc_uBaZqmm4w&usqp=CAU',
        }}
        style={{
          height: sizes.height + 40,
          width: sizes.width,
          //   opacity: 0.2,
        }}>
        <View style={{flex: 1, marginTop: 30}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              margin: 12,
            }}>
            Hi this is Rushikesh Bhumkar
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
