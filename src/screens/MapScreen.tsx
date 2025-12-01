import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 11.5753,
    longitude: 108.1429,
  });

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCoordinates({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={coordinates} title="Selected Location" />
      </MapView>
      <View style={styles.infoBox}>
        <Text style={styles.text}>
          Latitude: {coordinates.latitude.toFixed(4)}, Longitude: {coordinates.longitude.toFixed(4)}
        </Text>
      </View>
    </View>
  );
};

export default MapScreen;