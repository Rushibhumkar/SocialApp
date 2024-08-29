import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Linking,
  StatusBar,
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotiIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import MicIcon from 'react-native-vector-icons/Feather';
import LikeIcon from 'react-native-vector-icons/EvilIcons';
import ThreeDot from 'react-native-vector-icons/Entypo';
const Home = () => {
  const listedData = [
    {
      image:
        'https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg&ga=GA1.1.523526685.1724578514&semt=ais_hybrid',
      title: 'Travel',
    },
    {
      image:
        'https://media.istockphoto.com/id/2147864552/photo/view-of-a-meat-based-meal-at-restaurant.webp?b=1&s=612x612&w=0&k=20&c=ZpTB7TzmYk59Ewc1sdV3Z_AbJfJfaPwUL6dkaoa2dfg=',
      title: 'Food',
    },
    {
      image:
        'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?size=626&ext=jpg&ga=GA1.1.523526685.1724578514&semt=ais_hybrid',
      title: 'Shooping',
    },
    {
      image:
        'https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?size=626&ext=jpg&ga=GA1.1.523526685.1724578514&semt=ais_hybrid',
      title: 'health',
    },
  ];
  const recommendationList = [
    {
      image:
        'https://i.pinimg.com/474x/eb/9c/60/eb9c60cf2c2282288e11ee59c00eb1c1.jpg',
      title: 'Radisson Blue',
      ratings: {number: 4.2, counts: 120, type: 'Good'},
      realPrice: '2200',
      discPrice: '2000',
      addresss: 'Vilavnaar, Indore',
      location: {latitude: '', longitude: ''},
      label: 'Booking fast',
    },
    {
      image:
        'https://i.pinimg.com/474x/a0/da/88/a0da88b50ae3169df10402fbc6d4bc0f.jpg',
      title: 'Shreemaya',
      ratings: {number: 3.9, counts: 80, type: 'Good'},
      realPrice: '2200',
      discPrice: '1800',
      addresss: 'palasia, Indore',
      location: {latitude: '', longitude: ''},
      label: '30% Off',
    },
    {
      image:
        'https://i.pinimg.com/474x/70/45/a0/7045a0b58e7597f50a8b9816be5ee2ad.jpg',
      title: 'Radisson Blue',
      ratings: {number: 4.2, counts: 120, type: 'Good'},
      realPrice: '2200',
      discPrice: '2000',
      addresss: 'Vilavnaar, Indore',
      location: {latitude: '', longitude: ''},
      label: 'Booking fast',
    },
    {
      image:
        'https://i.pinimg.com/474x/bb/ae/23/bbae23394a829b8a08fcd41aa0a7365b.jpg',
      title: 'Shreemaya',
      ratings: {number: 3.9, counts: 80, type: 'Good'},
      realPrice: '2200',
      discPrice: '1800',
      addresss: 'palasia, Indore',
      location: {latitude: '', longitude: ''},
      label: '30% Off',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#6d38c3'} />
      {/* <------------TOP View----------------> */}
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=Crown+Pride+Colony+Silicon+City+Indore',
              )
            }>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <LocationIcon name="location-sharp" size={22} color={'#fff'} />
              <Text style={styles.addressText}>
                Crown Pride Colony, Silicon...
              </Text>
            </View>
            <Text style={styles.fullAddress}>
              Crown pride colony, Silicon city, Indore, Ma...
            </Text>
          </TouchableOpacity>
          <View style={{gap: 12, flexDirection: 'row', alignItems: 'center'}}>
            <BIcon name="alpha-b-circle-outline" color={'#fff'} size={24} />
            <NotiIcon
              name="notifications-circle-outline"
              size={26}
              color={'#fff'}
            />
          </View>
        </View>
        <View style={styles.searchBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SearchIcon name="search1" size={32} color={'grey'} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for ‘Hotels’"
              placeholderTextColor="#7f8387"
            />
          </View>
          <MicIcon name="mic" size={28} color={'grey'} />
        </View>
      </View>
      <ScrollView
        style={{backgroundColor: '#fff'}}
        contentContainerStyle={{paddingBottom: 40}}>
        {/* <--------------Categories------------------> */}
        <View style={styles.topCategoryCont}>
          <Text style={styles.topCategoriesTxt}>Top Categories</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllTxt}>See all</Text>
          </TouchableOpacity>
        </View>
        {/* <-----------horizontal listing--------> */}
        <ScrollView
          horizontal
          style={styles.categoriesList}
          showsHorizontalScrollIndicator={false}>
          {listedData.map((item, index) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  rowGap: 12,
                  paddingVertical: 12,
                }}
                key={index}>
                <Image style={styles.listImg} source={{uri: item.image}} />
                <Text style={{fontSize: 18, color: '#000'}}>{item.title}</Text>
              </View>
            );
          })}
        </ScrollView>
        {/* <-------recommendation------------> */}
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          Recommended for you
        </Text>
        <Text style={{fontSize: 13, color: 'grey', marginLeft: 20}}>
          We recommend these bases on your past orders and searches
        </Text>
        {/* <------------RecommendationList-------------> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: 20,
            rowGap: 20,
          }}>
          {recommendationList.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                }}>
                <ImageBackground
                  source={{uri: item.image}}
                  style={styles.imageBackground}>
                  <View style={styles.overlay}>
                    <Text style={styles.label}>{item.label}</Text>
                    <View style={styles.iconContainer}>
                      <LikeIcon name="heart" size={24} color={'white'} />
                      <ThreeDot
                        name="dots-three-vertical"
                        size={16}
                        color={'white'}
                        style={{marginTop: 4}}
                      />
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.ratingCont}>
                  <Text style={styles.ratingNo}>{item.ratings.number}</Text>
                  <Text style={styles.ratingType}>{item.ratings.type}</Text>
                  <Text style={styles.ratingCounts}>
                    ({item.ratings.counts} ratings)
                  </Text>
                </View>
                <View style={styles.hotelCont}>
                  <Text style={styles.hotelTitle}>{item.title}</Text>
                  <Text style={styles.realprice}>${item.realPrice}</Text>
                </View>
                <View style={styles.addressCont}>
                  <Text style={styles.addressTxt}>{item.addresss}</Text>
                  <Text style={styles.discprice}>${item.discPrice}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 0,
    left: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingBottom: 40,
    backgroundColor: '#6d38c3',
    shadowOffset: {width: 0, height: 7},
    shadowRadius: 0,
    alignItems: 'flex-start',
  },

  infoContainer: {
    width: '100%',
    height: 37,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },

  addressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 3,
  },

  fullAddress: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
  },

  iconB: {width: 28, height: 28, marginLeft: 46},

  image: {width: 28, height: 28, marginLeft: 14},

  searchBar: {
    width: '90%',
    height: 52,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 33,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },

  searchInput: {
    width: '80%',
    fontSize: 16,
    fontWeight: '500',
    color: '#7f8387',
    marginLeft: 10,
  },

  mic: {width: 24, height: 24, marginLeft: 'auto', marginRight: 18},
  topCategoryCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width: '90%',
    marginVertical: 20,
  },
  topCategoriesTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAllBtn: {
    backgroundColor: '#6d38c3',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },
  seeAllTxt: {
    color: '#fff',
  },
  categoriesList: {},
  listImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 12,
  },
  imageBackground: {
    width: 180,
    height: 180,
  },
  overlay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    gap: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 4,
    gap: 2,
  },
  ratingNo: {
    backgroundColor: '#6d38c3',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    color: '#fff',
  },
  ratingType: {
    color: '#6d38c3',
    fontWeight: 'bold',
  },
  ratingCounts: {color: '#000'},
  hotelCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 4,
    marginTop: 12,
  },
  hotelTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  realprice: {textDecorationLine: 'line-through', color: 'grey'},
  addressCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressTxt: {
    color: 'grey',
  },
  discprice: {color: '#000'},
});

export default Home;
