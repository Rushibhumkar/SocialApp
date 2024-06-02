import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const ApiRequests = () => {
  useEffect(() => {}, []);

  const data = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };
  axios.post('https://fakestoreapi.com/products', data).then(res => {
    console.log('result', res.data);
  });
  return (
    <View>
      <Text>ApiRequests</Text>
    </View>
  );
};

export default ApiRequests;
