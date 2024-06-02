import {View, Text} from 'react-native';
import React from 'react';

const PollOptionItem = ({item}: any) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#9e9e9e',
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 12,
      }}>
      <Text style={{color: '#000'}}>{item.value}</Text>
    </View>
  );
};

export default PollOptionItem;
