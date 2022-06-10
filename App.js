import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import Applyleave from './src/components/Applyleave';
import ApproveLeave from './src/components/ApproveLeave';
import ViewCalendarScreen from './src/components/ViewCalendarScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {/* <Stack.Screen options={{headershown:false}} name="Login" component={LoginScreen}/> */}
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ViewCalendar" component={ViewCalendarScreen}/>
        <Stack.Screen name="ApplyLeave" component={Applyleave}/>
        <Stack.Screen name="ApproveLeave" component={ApproveLeave}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
