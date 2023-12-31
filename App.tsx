import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigations/RootNavigator';
import store from './store';
import {UserContext} from './src/screens/UserContext';
const App = () => {
  return (
    <Provider store={store}>
      <UserContext>
        <RootNavigator />
      </UserContext>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
