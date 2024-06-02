import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {UserContext} from './src/screens/UserContext';
import MainNavigator from './employeeManagement/src/stacks/MainNavigator';
import RootNavigator from './src/navigations/RootNavigator';
// import FoodAppRootNavigator from './foodAppApi/FoodAppRootNavigator';
import PracticeMainNavigator from './PracticeProjects/src/navigation/PracticeMainNavigator';
import Layout from './AriBnbClone/app/tabs/Layout';
import AppNavigator from './PollApp/src/navigation/AppNavigator';
const App = () => {
  const [displayProject, setDisplayProject] = useState('');
  return (
    <>
      {displayProject === '' && (
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 12,
              marginTop: 12,
              alignSelf: 'center',
            }}
            onPress={() => setDisplayProject('AmazonClone')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Amazon Clone
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 12,
              marginTop: 12,
              alignSelf: 'center',
            }}
            onPress={() => setDisplayProject('EmployeeManagement')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Employee Management
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 12,
              marginTop: 12,
              alignSelf: 'center',
            }}
            onPress={() => setDisplayProject('AirBnbClone')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              AirBnbClone
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 12,
              marginTop: 12,
              alignSelf: 'center',
            }}
            onPress={() => setDisplayProject('AppNavigator')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Poll App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 12,
              marginTop: 12,
              alignSelf: 'center',
            }}
            onPress={() => setDisplayProject('PracticeProjects')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Practice Projects
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Render components based on the selected project */}
      {displayProject === 'AmazonClone' && (
        <Provider store={store}>
          <UserContext>
            <RootNavigator />
          </UserContext>
        </Provider>
      )}

      {displayProject === 'EmployeeManagement' && <MainNavigator />}
      {displayProject === 'PracticeProjects' && <PracticeMainNavigator />}
      {displayProject === 'AirBnbClone' && <Layout />}
      {displayProject === 'AppNavigator' && <AppNavigator />}
    </>
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
