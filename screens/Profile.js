import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Pseudo kode til mockup, kan ikke noget
const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            
            <Text style={styles.label}>Display Name:</Text>
            <TextInput
                style={styles.input}
                value="John Doe" // Static placeholder text
                editable={false} // No editing
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value="john.doe@example.com" // Static placeholder email
                editable={false} // No editing
            />

            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                value="+45 12 34 56 78" // Static placeholder phone number
                editable={false}
            />

            <Text style={styles.label}>Address:</Text>
            <TextInput
                style={styles.input}
                value="Husumvej 84b, 2300 København" // Static placeholder address
                editable={false}
            />

            <View style={styles.buttonContainer}>
                <Button title="Edit Profile" onPress={() => {}} disabled={true} />
            </View>
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
    label: {
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        color: '#333',
    },
    preferencesContainer: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginVertical: 10,
    },
    preferenceItem: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default Profile;
