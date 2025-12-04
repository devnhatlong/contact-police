import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ContactsScreen from './src/screens/ContactsScreen';
import MapScreen from './src/screens/MapScreen';
import CommuneDetailScreen from './src/screens/CommuneDetailScreen';
import { addSampleData, addSampleCommune } from './src/services/firebaseService';
import { Commune } from './src/services/firebaseService';

export type RootStackParamList = {
  ContactsList: undefined;
  CommuneDetail: { communeInfo: Commune };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const MapStack = createNativeStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: '#dc3545',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen 
        name="ContactsList" 
        component={ContactsScreen}
        options={({ navigation }) => ({
          title: 'Công an tỉnh Lâm Đồng',
          headerRight: () => (
            <TouchableOpacity 
              style={styles.importButton}
              onPress={async () => {
                Alert.alert(
                  'Import dữ liệu mẫu',
                  'Bạn muốn import loại dữ liệu nào?',
                  [
                    { text: 'Hủy', style: 'cancel' },
                    {
                      text: 'Contacts',
                      onPress: async () => {
                        try {
                          await addSampleData();
                          Alert.alert('Thành công', 'Đã thêm contacts mẫu vào Firebase!');
                        } catch (error: any) {
                          Alert.alert('Lỗi', error.message || 'Không thể thêm dữ liệu');
                        }
                      }
                    },
                    {
                      text: 'Commune',
                      onPress: async () => {
                        try {
                          await addSampleCommune();
                          Alert.alert('Thành công', 'Đã thêm commune mẫu vào Firebase!');
                        } catch (error: any) {
                          Alert.alert('Lỗi', error.message || 'Không thể thêm dữ liệu');
                        }
                      }
                    },
                    {
                      text: 'Cả hai',
                      onPress: async () => {
                        try {
                          await addSampleCommune();
                          await addSampleData();
                          Alert.alert('Thành công', 'Đã thêm tất cả dữ liệu mẫu vào Firebase!');
                        } catch (error: any) {
                          Alert.alert('Lỗi', error.message || 'Không thể thêm dữ liệu');
                        }
                      }
                    }
                  ]
                );
              }}
            >
              <Text style={styles.importButtonText}>Import Test Data</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="CommuneDetail" 
        component={CommuneDetailScreen}
        options={({ route }) => ({ 
          title: `Chi tiết ${route.params?.communeInfo?.ten_xa || ''}`,
        })}
      />
    </Stack.Navigator>
  );
}

function MapStackScreen() {
  return (
    <MapStack.Navigator 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: '#dc3545',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 16,
        },
      }}
    >
      <MapStack.Screen 
        name="MapMain" 
        component={MapScreen}
        options={{
          title: 'Bản đồ Công an tỉnh Lâm Đồng',
        }}
      />
    </MapStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#dc3545' }} edges={['top']}>
        <StatusBar
          translucent={false}
          backgroundColor="#dc3545"
          barStyle="light-content"
        />

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: 'red',
              tabBarIcon: ({ color, size }) => {
                if (route.name === 'Danh bạ') {
                  return <AntDesign name="contacts" size={size} color={color} />;
                } else if (route.name === 'Bản đồ') {
                  return <FontAwesome name="map-o" size={size} color={color} />
                }
              },
            })}
          >
            <Tab.Screen name="Danh bạ" component={ContactsStack} />
            <Tab.Screen name="Bản đồ" component={MapStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  importButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 10,
  },
  importButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
