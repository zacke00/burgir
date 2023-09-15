import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const Notes: React.FC = () => {
    const [text, setText] = React.useState("");



    return(
        <View style={styles.container}>
            <Text style={styles.note}>Notes</Text>
            <TextInput placeholder="Write something here" style={styles.TextInput} onChangeText={setText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        height: 100,
        width: 200,
        borderColor: "gray",
        borderWidth: 1
    },
    container: {
        paddingTop: 0,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"center",
        
    },
    note: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 0,
        color: "black",
        padding: 0
    }
})
