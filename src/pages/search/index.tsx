import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';

const SearchPage: React.FC = () => {
const [name, setName] = useState("");
const [text, setText] = useState("");
    return(
        <View style={styles.container}>
            <TextInput style={styles.TextInput} value={text} onChangeText={setText} placeholder='Input text here'/>
            <Text> Welcome {name} to our place</Text>
            <Button title="name" onPress={() => {setName(text); console.log(name)}}/>
        </View>
    )
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

})


export default SearchPage;