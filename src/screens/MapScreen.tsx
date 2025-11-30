import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MapScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FontAwesome name="map-marker" size={24} color="black" />
      <Text>Map Screen</Text>
    </View>
  );
};

export default MapScreen;