import {TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from './Explore';
import Inbox from './Inbox';
import Wishlists from './Wishlists';
import Trips from './Trips';
import Profile from './Profile';
import MessageIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();
const Layout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FF5A5F',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {color: '#008E97'},
        }}>
        <Tab.Screen
          name="Explore"
          component={StackNavigation}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <AntDesignIcon name="search1" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlists"
          component={Wishlists}
          options={{
            tabBarLabel: 'Wishlists',
            tabBarIcon: ({color, size}) => (
              <AntDesignIcon name="hearto" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Trips"
          component={Trips}
          options={{
            tabBarLabel: 'Trips',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="airbnb" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({color, size}) => (
              <MessageIcon name="message-square" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <UserIcon name="user-o" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
