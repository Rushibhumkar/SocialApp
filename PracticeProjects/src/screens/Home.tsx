import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {paragraph, data} from './data';
const Home = () => {
  console.log({paragraph});
  let result = '';
  const [array, setArray] = useState(data);
  const [sentenceLength, setSentenceLength] = useState(0);
  if (
    array.map((item, index) => {
      if (item.sentence === paragraph) {
        setSentenceLength(item.sentence.length);
        result = result + paragraph.slice(0, sentenceLength);
      } else {
        result = result + paragraph;
      }
    })
  )
    return (
      <View style={{padding: 12}}>
        {/* {array.map((item, index) => {
          return (
            <Text key={index} style={{color: '#000'}}>
              Output : {item.sentence}
            </Text>
          );
        })} */}
        <Text style={{color: '#000'}}>{result}</Text>
      </View>
    );
};

export default Home;
