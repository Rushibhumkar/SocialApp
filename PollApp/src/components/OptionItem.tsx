import {View, Text, TextInput} from 'react-native';
import React from 'react';

const OptionItem = ({item, onChangeText}: any) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 12,
        justifyContent: 'center',
        paddingHorizontal: 12,
      }}>
      <TextInput value={item} onChangeText={txt => onChangeText(txt)} />
    </View>
  );
};

export default OptionItem;
