import {
  View,
  Text,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect, useRef, useState} from 'react';
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from '@gorhom/bottom-sheet';
import listings from '../../assets/data/airbnb-listings.json';
const Listing = navigation => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(listings);
  }, []);
  console.log({listings});

  const renderRow: ListRenderItem<any> = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ListingDetails', {item: item})}>
      <View style={styles.listing}>
        <Image source={{uri: item.medium_url}} style={styles.image} />
        <TouchableOpacity style={{position: 'absolute', right: 30, top: 30}}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, fontFamily: 'mon-sb'}}>{item.name}</Text>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Ionicons name="star" size={16} />
            <Text style={{fontFamily: 'mon-sb'}}>
              {item.review_scores_rating / 20}
            </Text>
          </View>
        </View>
        <Text style={{fontFamily: 'mon'}}>{item.room_type}</Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          <Text style={{fontFamily: 'mon-sb'}}>€ {item.price}</Text>
          <Text style={{fontFamily: 'mon'}}>night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: 'red'}}>
      <BottomSheetFlatList
        renderItem={renderRow}
        data={items}
        ListHeaderComponent={
          <Text style={styles.info}>{items.length} homes</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  info: {
    textAlign: 'center',
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginTop: 4,
  },
});

export default Listing;
