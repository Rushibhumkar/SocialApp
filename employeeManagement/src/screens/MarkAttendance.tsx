import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const MarkAttendance = () => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, 'days');
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, 'days');
    setCurrentDate(prevDate);
  };

  const formatDate = date => {
    return date.format('MMMM D, YYYY');
  };

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.log('error fetching employee data', error);
      }
    };
    fetchEmployeeData();
  }, []);

  const [attendance, setAttendance] = useState([]);
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/attendance', {
          params: {
            date: currentDate.format('MMMM D, YYYY'),
          },
        });
        setAttendance(response.data);
      } catch (error) {
        console.log('error fetching attendance data', error);
      }
    };
    fetchAttendanceData();
  }, [currentDate]);

  const employeeWithAttendance = employees.map(employee => {
    const attendanceRecord = attendance.find(
      record => record.employeeId === employee.employeeId,
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : '',
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <AntDesign name="left" size={24} color="black" onPress={goToPrevDay} />
        <Text style={{color: '#000'}}>{formatDate(currentDate)}</Text>
        <AntDesign name="right" size={24} color="black" onPress={goToNextDay} />
      </View>
      <View style={{marginHorizontal: 12}}>
        {employeeWithAttendance.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate('EmployeeDetails', {
                name: item.employeeName,
                id: item.employeeId,
                salary: item.salary,
                designation: item.designation,
              })
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#4b6cb7',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16}}>
                {item.employeeName.charAt(0)}
              </Text>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                {item.employeeName}
              </Text>
              <Text style={{marginTop: 5, color: 'gray'}}>
                {item.designation} ({item.employeeId})
              </Text>
            </View>
            {item.status && (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#FF69B4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: 'bold',
                  }}>
                  {item.status.charAt(0)}
                </Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default MarkAttendance;
