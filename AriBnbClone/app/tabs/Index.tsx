import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import listings from '../../assets/data/airbnb-listings.json';

const Index = ({navigation}: any) => {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(listings);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#e1e2e3'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Header onCategoryChanged={onDataChanged} navigation={navigation} />
    </View>
  );
};

export default Index;
