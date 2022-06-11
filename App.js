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
import SignUp from './src/components/SignUp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#F4FBFF'}
      }}>
        {/* <Stack.Screen options={{headershown:false}} name="Login" component={LoginScreen}/> */}
        <Stack.Screen name="Login" component={LoginScreen}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="Sign Up" component={SignUp}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="Dashboard" component={HomeScreen}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="ViewCalendar" component={ViewCalendarScreen}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="ApplyLeave" component={Applyleave}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="ApproveLeave" component={ApproveLeave}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
        <Stack.Screen name="SignUp" component={SignUp}
        options = {{
          headerStyle: {
            backgroundColor: '#75C6EE',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 24
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
