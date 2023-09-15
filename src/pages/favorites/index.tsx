import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { Notes } from "./Notes";



const Favorites: React.FC = () => {

    const [favorites, setFavorites] = useState<[]>([]);
    const [showNotes, setShowNotes] = useState(false); // A state to control the visibility of Notes component.
    const [notesCount, setNotesCount] = useState<number>(0); // Keep track of how many notes to render

    // Add a new note by incrementing notesCount
    const addNote = () => {
        setNotesCount(notesCount + 1);
    }

    return(
        <View style={styles.container}>

            <Button 
                title="Add a new note" 
                onPress={addNote}
            />
        <ScrollView style={styles.container}>
            {Array.from({ length: notesCount }).map((_, index) => (
                <Notes key={index} />
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    TextInput: {
        height: 40,
        width: 200,
        borderColor: "gray",
        borderWidth: 1
    }
})

export default Favorites;