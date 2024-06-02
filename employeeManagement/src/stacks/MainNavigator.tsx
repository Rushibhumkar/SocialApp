import React from 'react';
import AddDetails from '../screens/AddDetails';
import Employees from '../screens/Employees';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MarkAttendance from '../screens/MarkAttendance';
import Summary from '../screens/Summary';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddDetails"
          component={AddDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employees"
          component={Employees}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MarkAttendance"
          component={MarkAttendance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
