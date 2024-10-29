import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

// Sætter lokationen til at være i København
const App = () => {
  const initialRegion = {
    latitude: 55.6761,  // Copenhagen latitude
    longitude: 12.5683, // Copenhagen longitude
    latitudeDelta: 0.0922, // Zoom level
    longitudeDelta: 0.0421, // Zoom level
  };
// Indlæser kortet
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
