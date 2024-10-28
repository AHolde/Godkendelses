import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { getApps, initializeApp } from "firebase/app"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from './screens/Home';
import Map from './screens/Map';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Savedlocations from './screens/SavedLocations';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1z0aQesaQwjGGVukgEHGpUj7ijwLRKE",
  authDomain: "excercise-bbfc0.firebaseapp.com",
  databaseURL: "https://excercise-bbfc0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "excercise-bbfc0",
  storageBucket: "excercise-bbfc0.appspot.com",
  messagingSenderId: "241241126167",
  appId: "1:241241126167:web:ed630643df0282c1c2b352",
  measurementId: "G-PCZRE4X9FN"
};

// Initialize Firebase if not already initialized
if (getApps().length === 0) {
    initializeApp(firebaseConfig);
    console.log("Firebase Initialized");
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#FF0000',
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'My Places') iconName = 'home';
            else if (route.name === 'Map') iconName = 'map';
            else if (route.name === 'Profile') iconName = 'person';
            else if (route.name === 'To Visit') iconName = 'archive';
            else if (route.name === 'Save location') iconName = 'save';

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="My Places" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="To Visit" component={Settings} />
        <Tab.Screen name="Save location" component={Savedlocations} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
