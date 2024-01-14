import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import MicIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/Feather';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/CartReducer';

const CartScreen = ({navigation}: any) => {
  const cart = useSelector((state: any) => state.cart.cart);
  console.log(cart);

  const total = cart
    ?.map((item: any) => item.price * item.quantity)
    .reduce(({curr, prev}: any) => curr + prev, 0);
  const dispatch = useDispatch();
  const increaseQuantity = (item: any) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item: any) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item: any) => {
    dispatch(removeFromCart(item));
  };
  return (
    <ScrollView
      style={{
        marginTop: Platform.OS == 'ios' ? 55 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
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
            size={22}
            color="black"
          />
          <TextInput
            placeholder="Search Amazon.in"
            placeholderTextColor={'grey'}
            style={{color: '#000'}}
          />
        </TouchableOpacity>

        <MicIcon name="mic" size={24} color="black" />
      </View>

      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: '400'}}>
          Subtotal :{' '}
        </Text>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          336
        </Text>
      </View>
      <Text style={{color: '#000', marginHorizontal: 10}}>
        EMI details Available
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text>Proceed to Buy ({cart.length}) items</Text>
      </TouchableOpacity>

      <Text
        style={{
          height: 1,
          borderColor: '#D0D0D0',
          borderWidth: 1,
          marginTop: 16,
        }}
      />

      <View style={{marginHorizontal: 10}}>
        {cart?.map(({item, index}: any) => (
          <View
            style={{
              backgroundColor: 'white',
              marginVertical: 10,
              borderBottomColor: '#F0F0F0',
              borderWidth: 2,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
            }}
            key={index}>
            <TouchableOpacity
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 140, height: 140, resizeMode: 'contain'}}
                  source={{uri: item?.image}}
                />
              </View>

              <View>
                <Text numberOfLines={3} style={{width: 150, marginTop: 10}}>
                  {item?.title}
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 6,
                  }}>
                  {item?.price}
                </Text>
                <Image
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                  source={{
                    uri: 'https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png',
                  }}
                />
                <Text style={{color: 'green'}}>In Stock</Text>
                {/* <Text style={{color:'#000', fontWeight: "500", marginTop: 6 }}>
                  {item?.rating?.rate} ratings
                </Text> */}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 15,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 7,
                }}>
                {item?.quantity > 1 ? (
                  <TouchableOpacity
                    onPress={() => decreaseQuantity(item)}
                    style={{
                      backgroundColor: '#D8D8D8',
                      padding: 7,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}>
                    <MinusIcon name="minus" size={24} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => deleteItem(item)}
                    style={{
                      backgroundColor: '#D8D8D8',
                      padding: 7,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}>
                    <DeleteIcon name="delete" size={24} color="black" />
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 18,
                    paddingVertical: 6,
                  }}>
                  <Text style={{color: '#000'}}>{item?.quantity}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => increaseQuantity(item)}
                  style={{
                    backgroundColor: '#D8D8D8',
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}>
                  <PlusIcon name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => deleteItem(item)}
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: '#C0C0C0',
                  borderWidth: 0.6,
                }}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginBottom: 15,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: '#C0C0C0',
                  borderWidth: 0.6,
                }}>
                <Text>Save For Later</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: '#C0C0C0',
                  borderWidth: 0.6,
                }}>
                <Text>See More Like this</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
