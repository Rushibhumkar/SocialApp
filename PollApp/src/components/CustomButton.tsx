import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onClick}: any) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        alignSelf: 'center',
        height: 50,
        backgroundColor: 'purple',
        borderRadius: 8,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onClick}>
      <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
