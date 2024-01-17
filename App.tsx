// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Provider} from 'react-redux';
// import RootNavigator from './src/navigations/RootNavigator';
// import store from './store';
// import {UserContext} from './src/screens/UserContext';
// import Home from './practices/Home';
// import MainNavigator from './practices/MainNavigator';
// const App = () => {
//   return (
//     // <Provider store={store}>
//     //   <UserContext>
//     //     <RootNavigator />
//     //   </UserContext>
//     // </Provider>
//     // <Home />
//     <MainNavigator />
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
// Import necessary components and functions
import React from 'react';
import {Provider} from 'react-redux';
import store from './practices/src/store/store';
import Home from './practices/Home';
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
