import {TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modals/Login';
import Index from './Index';
import Booking from '../modals/Booking';
import Listing from '../modals/Listing';
import ListingDetails from '../modals/ListingDetails';

const StackNavigation = ({navigation}: any) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          headerShown: false,
          title: 'Index',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
          animationDuration: 200,
          headerTitleAlign: 'center',
          presentation: 'modal',
          title: 'Log in or sign up',
          headerLeft: () => <></>,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-outline" size={28} color={'#000'} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          headerTitleAlign: 'center',
          title: 'Bookings',
        }}
      />
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          headerTitleAlign: 'center',
          title: 'Listing',
        }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          headerTitleAlign: 'center',
          title: 'ListingDetails',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
