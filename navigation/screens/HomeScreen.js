import * as React from 'react';
import { Text, View } from 'react-native';
import Weather from '../components/Weather';
import CropsView from '../components/CropsView';
import AddCropButton from '../components/AddCropButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewScreen from './ViewScreen';

const Stack = createStackNavigator();

const Screen1 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', height: '100%' }}>
      <Weather />
      <CropsView />
      <AddCropButton />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewScreen"
        component={ViewScreen}
        options={{
          headerBackTitle: 'Home',
          headerTitle: 'Rice',
          headerTintColor: '#000',
        }}
      />
    </Stack.Navigator>
  );
}
