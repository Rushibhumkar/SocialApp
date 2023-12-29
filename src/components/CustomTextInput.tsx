import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {keyboardType} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const CustomTextInput = ({
  placeholder,
  onChangeText,
  value,
  isValid,
  sercurityKey,
  icon,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 0.4,
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 22,
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center',
        borderColor: isValid ? '#9e9e9e' : 'red',
      }}>
      <Image
        source={{uri: icon}}
        style={{width: 24, height: 24}}
        tintColor={'#9e9e9e'}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={sercurityKey}
        placeholderTextColor={'grey'}
        style={{
          marginHorizontal: 12,
          color: '#000',
          width: '90%',
        }}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
