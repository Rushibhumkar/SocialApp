import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ThirdScreen = ({route, navigation}: any) => {
  const {prevScreenName} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          backgroundColor: 'pink',
          padding: 12,
          fontSize: 22,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {prevScreenName}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{textAlign: 'center', color: '#fff'}}>
          Navigate to Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({});
