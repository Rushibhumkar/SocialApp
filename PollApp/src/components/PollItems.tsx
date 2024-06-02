import {View, Text, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import PollOptionItem from './PollOptionItem';

const PollItems = () => {
  const [imgLoad, setImgLoad] = useState(true);
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 20,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
          {imgLoad && (
            <Image
              source={require('../../../src/images/Amazon-Logo.png')}
              style={{height: 40, width: 40}}
            />
          )}
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
            style={{height: 40, width: 40}}
            onLoad={() => {
              setImgLoad(false);
              console.log('render');
            }}
          />
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: 16,
              marginLeft: 12,
            }}>
            {'Rushikesh'}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          width: '90%',
          alignSelf: 'center',
        }}>
        {'Which mobile brand you use?'}
      </Text>
      <FlatList
        data={[
          {value: 'option 1', key: 0},
          {value: 'option 2', key: 1},
        ]}
        renderItem={({item, index}: any) => {
          return <PollOptionItem item={item} />;
        }}
      />
    </View>
  );
};

export default PollItems;
