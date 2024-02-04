import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const BtnParent = () => {
  const handleButtonPress = (buttonText: any) => {
    console.log(`Button "${buttonText}" pressed`);
  };
  const animatedButton = (animationType: string, buttonText: string) => (
    <Animatable.View animation={animationType} style={styles.animatedButton}>
      <TouchableOpacity onPress={() => handleButtonPress(buttonText)}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494f5c',
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={'#494f5c'}
        barStyle={'default'}
      />
      {animatedButton('bounceIn', 'Button 1')}
      {animatedButton('bounceInDown', 'Button 2')}
      {animatedButton('bounceInUp', 'Button 3')}
      {animatedButton('bounceInLeft', 'Button 4')}
      {animatedButton('bounceInRight', 'Button 5')}
      {animatedButton('bounceIn', 'Button 6')}
      {animatedButton('bounceInDown', 'Button 7')}
      {animatedButton('bounceInUp', 'Button 8')}
      {animatedButton('bounceInLeft', 'Button 9')}
      {animatedButton('bounceInRight', 'Button 10')}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animatedButton: {
    marginBottom: 10,
    width: '90%',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#86c740',
  },
});

export default BtnParent;
