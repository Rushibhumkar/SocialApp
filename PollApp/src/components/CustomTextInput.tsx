import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({placeholder, value, onChangeText, warn, mt}: any) => {
  return (
    <View style={{marginTop: mt ? mt : 20}}>
      <View
        style={{
          width: '90%',
          borderWidth: 1,
          borderRadius: 12,
          alignSelf: 'center',
          borderColor: '#9e9e9e',
          paddingHorizontal: 8,
        }}>
        <TextInput
          value={value}
          onChangeText={txt => onChangeText(txt)}
          placeholder={placeholder}
          style={{width: '80%', height: 50, color: '#000', fontSize: 16}}
          placeholderTextColor={'grey'}
        />
      </View>
      {warn && warn != '' ? (
        <Text style={{color: 'red', marginTop: 8, marginLeft: 22}}>{warn}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
