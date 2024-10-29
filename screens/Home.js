import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [savedLocations, setSavedLocations] = useState([]);
    const navigation = useNavigation();
    const database = getDatabase();

    // Hent gemte lokationer fra Firebase
    useEffect(() => {
        const locationsRef = ref(database, 'locations');
        onValue(locationsRef, (snapshot) => {
            const data = snapshot.val();
            const locationsArray = data ? Object.keys(data).map(key => ({ id: key, name: data[key].name, ...data[key] })) : [];
            setSavedLocations(locationsArray);
        });
    }, []);

    // Naviger til kortet med gemte lokationer, virker ikke endnu
    const navigateToMap = (location) => {
        navigation.navigate('Map', {
            latitude: location.latitude,
            longitude: location.longitude,
            name: location.name
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Locations</Text>
            <FlatList
                data={savedLocations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigateToMap(item)} style={styles.locationItem}>
                        <Text style={styles.locationText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No locations saved</Text>}
            />
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
    locationItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    locationText: {
        fontSize: 18,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
    },
});

export default Home;
