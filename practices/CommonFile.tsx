import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CommonFile = ({title, imageUrl, onSelect}: any) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: '45%',
        backgroundColor: 'grey',
        borderRadius: 8,
        borderWidth: isSelected ? 2 : 0,
        borderColor: isSelected ? '#000' : '#fff',
      }}
      onPress={() => (
        setIsSelected(!isSelected), onSelect && onSelect(!isSelected)
      )}>
      <Text style={{color: '#fff', textAlign: 'center', marginTop: 8}}>
        {title}
      </Text>
      <Image
        source={{uri: imageUrl}}
        style={{
          height: 50,
          width: 50,
          alignSelf: 'center',
          marginTop: 12,
        }}
      />
      {isSelected && (
        <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
          <Text
            style={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: 8,
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: 12,
              color: '#fff',
            }}>
            Selected
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CommonFile;

const styles = StyleSheet.create({});
