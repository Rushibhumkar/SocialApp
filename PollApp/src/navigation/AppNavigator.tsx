import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import AddPoll from '../screens/AddPoll';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="AddPoll"
          component={AddPoll}
          options={{
            headerShown: true,
            title: 'Add New Poll',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true,
            title: '',
            animation: 'slide_from_right',
            // presentation: 'modal',
            // gestureEnabled: true,
            // gestureDirection: 'vertical',//import stack as a createstacknavigator insteda of createnativestacknavigator
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
