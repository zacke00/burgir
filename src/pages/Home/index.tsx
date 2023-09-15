import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';



const HomePage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterPlus = () => {
    setCounter(counter + 1);
  }
  const handleCounterMinus =() => {
    setCounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      
      <Button title="+" onPress={handleCounterPlus}/>
      <Button title="-" onPress={handleCounterMinus}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },


});

export default HomePage;