import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
  ScrollView,
} from 'react-native';
import listingsData from '../../assets/data/airbnb-listings.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ListingDetails = (route: any) => {
  const {id} = route.params;
  const listing = (listingsData as any[]).find(item => item.id === id);
  const navigation = useNavigation();

  const shareListing = async () => {
    try {
      await Share.share({
        title: listing.name,
        url: listing.listing_url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,

      headerBackground: () => <View style={styles.header}></View>,
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton} onPress={shareListing}>
            <Ionicons name="share-outline" size={22} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="heart-outline" size={22} color={'#000'} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={'#000'} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        scrollEventThrottle={16}>
        <Image
          source={{uri: listing.xl_picture_url}}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{listing.name}</Text>
          <Text style={styles.location}>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text style={styles.rooms}>
            {listing.guests_included} guests · {listing.bedrooms} bedrooms ·{' '}
            {listing.beds} bed · {listing.bathrooms} bathrooms
          </Text>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Ionicons name="star" size={16} />
            <Text style={styles.ratings}>
              {listing.review_scores_rating / 20} · {listing.number_of_reviews}{' '}
              reviews
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.hostView}>
            <Image
              source={{uri: listing.host_picture_url}}
              style={styles.host}
            />

            <View>
              <Text style={{fontWeight: '500', fontSize: 16}}>
                Hosted by {listing.host_name}
              </Text>
              <Text>Host since {listing.host_since}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </ScrollView>

      <View style={{backgroundColor: 'red'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.footerText}>
            <Text style={styles.footerPrice}>€{listing.price}</Text>
            <Text>night</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingRight: 20, paddingLeft: 20}}>
            <Text style={{color: 'red'}}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'mon-sb',
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'mon-sb',
  },
  rooms: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 4,
    fontFamily: 'mon',
  },
  ratings: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: 'mon-sb',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
  },

  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ListingDetails;
