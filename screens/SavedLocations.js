import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getDatabase, ref, push } from "firebase/database";

const SavedLocations = () => {
    const [location, setLocation] = useState('');
    const database = getDatabase();

    // Function to save location to Firebase
    const saveLocation = () => {
        if (location) {
            const locationsRef = ref(database, 'locations');
            push(locationsRef, { name: location })
                .then(() => {
                    console.log("Location saved successfully!");
                    setLocation(''); // Clear the input after saving
                })
                .catch(error => console.error("Error saving location: ", error));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Save Location</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter location name"
                value={location}
                onChangeText={setLocation}
            />
            <Button title="Save Location" onPress={saveLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default SavedLocations;
