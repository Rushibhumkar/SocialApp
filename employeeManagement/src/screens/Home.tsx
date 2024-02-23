import {Text, View, ScrollView, Pressable, StatusBar} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {sizes} from '../../../src/utils/Constants';

const Home = ({navigation}: any) => {
  return (
    <ScrollView style={{flex: 1, minHeight: sizes.height}}>
      <StatusBar backgroundColor={'#7F7FD5'} barStyle={'light-content'} />
      <LinearGradient
        colors={['#7F7FD5', '#E9E4F0']}
        style={{flex: 1, minHeight: sizes.height}}>
        <View style={{padding: 12}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
              Employee Managament System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <Pressable
              onPress={() => navigation.push('Employees')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: '#000',
                  marginTop: 7,
                  fontWeight: '600',
                }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('MarkAttendance')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{color: '#000', marginTop: 7, fontWeight: '600'}}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                  color: '#000',
                }}>
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.push('Summmary')}
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                  color: '#000',
                }}>
                Summary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                  color: '#000',
                }}>
                All Generate Reports
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: '#000',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                }}>
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#f79d00',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',

                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{color: '#000', marginTop: 7}}>
                Attendance Criteria
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#ABCABA',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{color: '#000', marginTop: 7}}>
                Increased Workflow
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#D3CCE3',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',

                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{color: '#000', marginTop: 7}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: '#bdc3c7',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{color: '#000', marginTop: 7}}>
                Employee Performance
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;
