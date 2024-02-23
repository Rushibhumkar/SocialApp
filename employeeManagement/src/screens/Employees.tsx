import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchResults from '../components/SearchResults';

const Employees = ({navigation}) => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/employees');
        console.log(response);
        setEmployees(response.data);
      } catch (err) {
        console.log('error fetching employee data', err);
      }
    };
    fetchEmployeeData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 8,
        }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{marginLeft: 10}}
          name="arrow-back"
          size={24}
          color="black"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 12,
            gap: 10,
            height: 40,
            flex: 1,
          }}>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={{
              flex: 1,
              borderRadius: 12,
              borderWidth: 0.8,
              borderColor: 'grey',
              color: '#000',
              paddingHorizontal: 12,
            }}
            placeholder="Search"
            placeholderTextColor={'grey'}
          />
          <AntDesign
            style={{marginLeft: 10}}
            name="search1"
            size={20}
            color="black"
          />

          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => navigation.push('AddDetails')}>
                <AntDesign name="pluscircle" size={30} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </View>
      </View>

      {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#000'}}>No Data</Text>
          <Text style={{color: '#000'}}>
            Press on the plus button and add your Employee
          </Text>
          <Pressable onPress={() => navigation.push('AddDetails')}>
            <AntDesign
              style={{marginTop: 30}}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({});
