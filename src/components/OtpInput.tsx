import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const OTPInput = ({onChange}: any) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length > 1) {
      const chars = text.split('');
      chars.forEach((char, i) => {
        if (i + index < 6) {
          otp[i + index] = char;
          inputRefs.current[i + index]?.focus();
        }
      });
      setOtp([...otp]);
      onChange(otp.join(''));
    } else {
      otp[index] = text;
      setOtp([...otp]);
      if (text && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
      onChange(otp.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          style={styles.inputField}
          value={digit}
          onChangeText={text => handleChangeText(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          placeholder="-"
          placeholderTextColor="#7f8387"
          keyboardType="numeric"
          maxLength={1}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    color: '#000',
    width: 40,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default OTPInput;
