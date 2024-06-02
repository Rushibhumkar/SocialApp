import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';
import axios from 'axios';

const AddDetails = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');

  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };

    axios
      .post('http://localhost:8000/addEmployee', employeeData)
      .then(response => {
        Alert.alert(
          'Registration Successful',
          'You have been registered successfully',
        );
        clearFields();
      })
      .catch(error => {
        Alert.alert(
          'Registration Fail',
          'An error occurred during registration',
        );
        console.log('register failed', error);
      });
  };

  const clearFields = () => {
    setName('');
    setEmployeeId('');
    setDob('');
    setMobileNo('');
    setSalary('');
    setAddress('');
    setJoiningDate('');
    setDesignation('');
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      contentContainerStyle={{paddingVertical: 12}}>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Add a New Employee
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#000',
          }}>
          Full Name (First and last Name)
        </Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Employee Id
        </Text>
        <TextInput
          value={employeeId}
          onChangeText={text => setEmployeeId(text)}
          style={styles.input}
          placeholder="Employee Id"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Designation
        </Text>
        <TextInput
          value={designation}
          onChangeText={text => setDesignation(text)}
          style={styles.input}
          placeholder="Designation"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Mobile Number
        </Text>
        <TextInput
          value={mobileNo}
          onChangeText={text => setMobileNo(text)}
          style={styles.input}
          placeholder="Mobile No"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Date of Birth
        </Text>
        <TextInput
          value={dob}
          onChangeText={text => setDob(text)}
          style={styles.input}
          placeholder="Enter Date of Birth"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Joining Date
        </Text>
        <TextInput
          value={joiningDate}
          onChangeText={text => setJoiningDate(text)}
          style={styles.input}
          placeholder="Joining Date"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Salary
        </Text>
        <TextInput
          value={salary}
          onChangeText={text => setSalary(text)}
          style={styles.input}
          placeholder="Enter Salary"
          placeholderTextColor={'grey'}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Address
        </Text>
        <TextInput
          value={address}
          onChangeText={text => setAddress(text)}
          style={styles.input}
          placeholder="Enter Address"
          placeholderTextColor={'grey'}
        />

        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={{color: '#000', fontWeight: 'bold'}}>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    padding: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#7F7FD5',
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default AddDetails;
