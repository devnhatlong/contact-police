import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ImageBackground, SafeAreaView } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import MapScreen from './src/screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/images/trong.png')}
        style={{ flex: 1 }}
      >
        
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  if (route.name === 'Contacts') {
                    return <AntDesign name="contacts" size={size} color={color} />;
                  } else if (route.name === 'Map') {
                    return <FontAwesome name="map-marker" size={size} color={color} />;
                  }
                },
              })}
            >
              <Tab.Screen name="Contacts" component={ContactsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
          </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>
  );
}
