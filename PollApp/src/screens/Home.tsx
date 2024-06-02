import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import PollItems from '../components/PollItems';
interface Props {
  navigation: any;
}
const Home: React.FC<Props> = ({navigation}) => {
  const [polls, setPolls] = useState([1, 1, 1, 1]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 56,
          backgroundColor: 'purple',
          justifyContent: 'center',
          padding: 12,
        }}>
        <Text style={{fontSize: 22, fontWeight: '600', color: '#fff'}}>
          PollPro
        </Text>
      </View>
      <FlatList
        data={polls}
        renderItem={() => {
          return <PollItems />;
        }}
      />
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'purple',
          borderRadius: 30,
          position: 'absolute',
          bottom: 50,
          right: 20,
          paddingHorizontal: 24,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.4}
        onPress={() => navigation.navigate('AddPoll')}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: '600'}}>
          Add New Poll
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
