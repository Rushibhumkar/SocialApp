import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import OptionItem from '../components/OptionItem';
import CustomButton from '../components/CustomButton';

const AddPoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    {value: '', key: 0},
    {value: '', key: 1},
  ]);

  const editOption = ({item, ind, txt}: any) => {
    let tempOptions = options;
    tempOptions.map((item, index) => {
      if (ind == index) {
        item.value = txt;
      }
    });
    let temp: any = [];
    tempOptions.map(item => {
      temp.push(item);
    });
    setOptions(temp);
  };

  const addOption = () => {
    let tempOptions = options;
    tempOptions.push({value: '', key: options.length});
    let temp: any = [];
    tempOptions.map(item => {
      temp.push(item);
    });
    setOptions(temp);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: '90%',
          height: 100,
          borderRadius: 12,
          padding: 12,
          borderWidth: 1,
          borderColor: '#9e9e9e',
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <TextInput
          placeholder="Enter your question......."
          placeholderTextColor={'grey'}
          value={question}
          onChangeText={txt => setQuestion(txt)}
          multiline
          style={{color: '#000'}}
        />
      </View>
      {options.map(({item, index}: any) => {
        return (
          <OptionItem
            item={item}
            onChangeText={(txt: any) => {
              console.log(txt);
              editOption(item, index, txt);
            }}
          />
        );
      })}
      <Text
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 12,
          width: 120,
          marginTop: 20,
          color: '#000',
          fontSize: 14,
          marginLeft: 12,
          textAlign: 'center',
        }}
        onPress={addOption}>
        Add More
      </Text>
      <CustomButton
        title={'Post Poll'}
        onClick={() => {
          null;
        }}
      />
    </View>
  );
};

export default AddPoll;
