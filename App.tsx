import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ContactsScreen from './src/screens/ContactsScreen';
import MapScreen from './src/screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Vùng safe area trên (đúng với camera Android / notch iOS) */}
      <SafeAreaView style={{ backgroundColor: 'red' }} edges={['top']} />

      {/* Toàn bộ nội dung bên dưới */}
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          translucent={false}
          backgroundColor="red"
          barStyle="light-content"
        />

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Công an tỉnh Lâm Đồng</Text>
        </View>

        {/* BODY */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: 'red',
              tabBarIcon: ({ color, size }) => {
                if (route.name === 'Danh bạ') {
                  return <AntDesign name="contacts" size={size} color={color} />;
                } else if (route.name === 'Bản đồ') {
                  return <FontAwesome name="map-marker" size={size} color={color} />;
                }
              },
            })}
          >
            <Tab.Screen name="Danh bạ" component={ContactsScreen} />
            <Tab.Screen name="Bản đồ" component={MapScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
