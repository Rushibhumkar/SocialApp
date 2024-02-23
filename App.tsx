import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigations/RootNavigator';
import store from './store';
import {UserContext} from './src/screens/UserContext';
import Home from './employeeManagement/src/screens/Home';
import MainNavigator from './employeeManagement/src/stacks/MainNavigator';
const App = () => {
  return (
    // <Provider store={store}>
    //   <UserContext>
    //     <RootNavigator />
    //   </UserContext>
    // </Provider>
    // <Home />
    <MainNavigator />
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}>
    //   <Text style={{color: '#000'}}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <StatusBar backgroundColor={'green'} barStyle={'light-content'} />
    // </View>
  );
};

export default App;

// Import necessary components and functions
// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './practices/src/store/store';
// import MainNavigator from './practices/MainNavigator';
// const App = () => {
//   return (
//     <Provider store={store}>
//       <MainNavigator />
//     </Provider>
//   );
// };

// export default App;
