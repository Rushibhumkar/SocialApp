import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useContext, useState} from 'react';
import Notification from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
// import { UserType } from "../UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}: any) => {
  // const { userId, setUserId } = useContext(UserType);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#00CED1',
      },
      headerLeft: () => (
        <Image
          style={{width: 140, height: 120, resizeMode: 'contain'}}
          source={{
            uri: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png',
          }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            marginRight: 12,
          }}>
          <Notification
            name="notifications-outline"
            size={24}
            color="black"
            style={{padding: 4}}
          />
          <SearchIcon
            name="search1"
            size={24}
            color="black"
            style={{padding: 4}}
          />
        </View>
      ),
    });
  }, [navigation]);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/profile/${userId}`,
        );
        const {user} = response.data;
        setUser(user);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchUserProfile();
  }, []);
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem('authToken');
    console.log('auth token cleared');
    navigation.replace('Login');
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/orders/${userId}`,
        );
        const orders = response.data.orders;
        setOrders(orders);

        setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchOrders();
  }, []);
  console.log('orders', orders);
  return (
    <ScrollView style={{padding: 10, flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'#00CED1'} barStyle={'light-content'} />
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
        Welcome Rushikesh
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 12,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#E0E0E0',
            borderRadius: 25,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: '#000'}}>Your orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#E0E0E0',
            borderRadius: 25,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: '#000'}}>Your Account</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 12,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#E0E0E0',
            borderRadius: 25,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: '#000'}}>Buy Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={logout}
          style={{
            padding: 10,
            backgroundColor: '#E0E0E0',
            borderRadius: 25,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: '#000'}}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {loading ? (
          <Text>Loading...</Text>
        ) : orders.length > 0 ? (
          orders.map(order => (
            <TouchableOpacity
              style={{
                marginTop: 20,
                padding: 15,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#d0d0d0',
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={order._id}>
              {/* Render the order information here */}
              {order.products.slice(0, 1)?.map(product => (
                <View style={{marginVertical: 10}} key={product._id}>
                  <Image
                    source={{uri: product.image}}
                    style={{width: 100, height: 100, resizeMode: 'contain'}}
                  />
                </View>
              ))}
            </TouchableOpacity>
          ))
        ) : (
          <Text>No orders found</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
