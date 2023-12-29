import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import HomeUnFocused from 'react-native-vector-icons/AntDesign';
import HomeFocused from 'react-native-vector-icons/Entypo';
import UserUnFocused from 'react-native-vector-icons/AntDesign';
import UserFocused from 'react-native-vector-icons/Entypo';
import CartUnFocused from 'react-native-vector-icons/AntDesign';
import CartFocused from 'react-native-vector-icons/Entypo';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <HomeFocused name="home" size={24} color={'#008E97'} />
              ) : (
                <HomeUnFocused name="home" size={24} color={'#000'} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <UserFocused name="user" size={24} color={'#008E97'} />
              ) : (
                <UserUnFocused name="user" size={24} color={'#000'} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <CartFocused name="shopping-cart" size={24} color={'#008E97'} />
              ) : (
                <CartUnFocused name="shoppingcart" size={24} color={'#000'} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});