import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SecondScreen = ({navigation, route}: any) => {
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
        onPress={() =>
          navigation.navigate('ThirdScreen', {
            prevScreenName: prevScreenName,
          })
        }>
        <Text style={{textAlign: 'center', color: '#fff'}}>
          Navigate To Third Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({});
