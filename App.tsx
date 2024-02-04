import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from './practices/otpVerification/screens/Otp';
import Gated from './practices/otpVerification/screens/Gated';
import PhoneNumber from './practices/otpVerification/screens/PhoneNumber';

const App = () => {
  type StackParamList = {
    PhoneNumber: undefined;
    Otp: {phoneNumber: string};
    Gated: undefined;
  };

  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PhoneNumber"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Gated" component={Gated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
