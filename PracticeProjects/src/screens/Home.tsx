// import {
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   PermissionsAndroid,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import SearchIcon from 'react-native-vector-icons/AntDesign';
// import ThreeDotIcon from 'react-native-vector-icons/Entypo';

// const Home = () => {
//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message:
//             'This app needs access to your storage to function properly.',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Storage permission granted');
//       } else {
//         console.log('Storage permission denied');
//       }
//     } catch (error) {
//       console.error('Error requesting storage permission:', error);
//     }
//   };
//   useEffect(() => {
//     requestStoragePermission();
//   }, []);

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
//       <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
//       <View
//         style={{
//           padding: 12,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <Text style={{fontSize: 28, color: '#fff'}}>Music</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'flex-start',
//             gap: 12,
//           }}>
//           <TouchableOpacity style={{padding: 8}}>
//             <SearchIcon name="search1" size={24} color={'#fff'} />
//           </TouchableOpacity>
//           <TouchableOpacity style={{padding: 8}}>
//             <ThreeDotIcon name="dots-three-vertical" size={24} color={'#fff'} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <ScrollView
//         style={{flex: 1, backgroundColor: '#000'}}
//         contentContainerStyle={{paddingBottom: 20}}>
//         <Text>Home</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home;

import {View, Text} from 'react-native';
import React from 'react';

const data = [
  {name: 'Rushi', mob: 8989},
  {name: 'Rushi', mob: 8989},
  {mob: 8989},
  {name: 'Rushi'},
];
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#c4c4c4'}}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              padding: 12,
              margin: 12,
              backgroundColor: '#fff',
              borderRadius: 12,
              flexDirection: 'column',
              gap: 8,
            }}>
            <Text style={{color: '#000'}}>Name:{item?.name}</Text>
            <Text style={{color: '#000'}}>Mob:{item?.mob}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Home;
