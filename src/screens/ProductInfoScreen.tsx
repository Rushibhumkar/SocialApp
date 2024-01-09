import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import MicIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/CartReducer';

const ProductInfoScreen = ({route}: any) => {
  const carouselImages = route.params.carouselImages;
  const {width} = Dimensions.get('window');
  const height = (width * 100) / 100;
  const [refreshing, setRefreshing] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const dispatch = useDispatch();
  const addItemToCart = item => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector(state => {
    state.cart.cart;
  });
  console.log(cart);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#007AFF']}
          style={{position: 'relative', top: 40}}
        />
      }
      style={{
        marginTop: Platform.OS == 'ios' ? 55 : 0,
        flex: 1,
        backgroundColor: '#fff',
      }}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#00CED1',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}>
          <SearchIcon
            style={{paddingLeft: 10}}
            name="search1"
            size={24}
            color={'#000'}
          />
          <TextInput
            placeholder="Search Amazon.in"
            placeholderTextColor={'rgb(160,160,160)'}
            style={{color: '#000'}}
          />
        </TouchableOpacity>
        <MicIcon
          style={{marginHorizontal: 6}}
          name="mic"
          size={24}
          color={'#000'}
        />
      </View>
      <FlatList
        keyExtractor={item => item?.id || item.index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={carouselImages}
        renderItem={({item, index}) => (
          <ImageBackground
            style={{width, height}}
            resizeMode="contain"
            source={{uri: item}}
            key={index}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#C60C30',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 12,
                  }}>
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <ShareIcon name="share-variant" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#E0E0E0',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 'auto',
                marginRight: 20,
                marginBottom: 20,
                alignSelf: 'flex-end',
              }}>
              <HeartIcon name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        )}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>
          {route?.params?.title}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 6,
            color: '#000',
          }}>
          ₹{route?.params?.price}
        </Text>
      </View>

      <Text
        style={{
          height: 1,
          borderColor: '#D0D0D0',
          borderWidth: 1,
          color: '#000',
        }}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text style={{color: '#000'}}>Color: </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text style={{color: '#000'}}>Size: </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
          {route?.params?.size}
        </Text>
      </View>

      <Text
        style={{
          height: 1,
          borderColor: '#D0D0D0',
          borderWidth: 1,
          color: '#000',
        }}
      />

      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginVertical: 5,
            color: '#000',
          }}>
          Total : ₹{route.params.price}
        </Text>
        <Text style={{color: '#00CED1'}}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
            gap: 5,
          }}>
          <LocIcon name="location" size={24} color="black" />

          <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>
            Deliver To Sujan - Bangalore 560019
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: 'green',
          marginHorizontal: 10,
          fontWeight: '500',
        }}>
        IN Stock
      </Text>
      <TouchableOpacity
        onPress={() => addItemToCart(route.params.item)}
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        {addedToCart ? (
          <Text style={{color: '#fff'}}>Added to Cart</Text>
        ) : (
          <Text style={{color: '#fff'}}>Add to Cart</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFAC1C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text style={{color: '#fff'}}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
