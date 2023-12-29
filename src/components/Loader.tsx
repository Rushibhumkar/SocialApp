import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000050',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#fff',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({});
