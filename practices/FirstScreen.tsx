import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FirstScreen = ({navigation, route}: any) => {
  const currScreenName = route.name;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={() =>
          navigation.navigate('ThirdScreen', {prevScreenName: currScreenName})
        }>
        <Text style={{textAlign: 'center', color: '#fff'}}>
          Navigate To Second Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
