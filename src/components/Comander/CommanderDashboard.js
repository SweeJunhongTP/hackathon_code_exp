//home for commander
import { StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-web'

import { useNavigation } from '@react-navigation/core'
import { Calendar } from 'react-native-calendars';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
export default function CommanderDashboard() {
  const navigation = useNavigation()
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
        const documentSnapshot = await getDoc(doc(db, 'Users', auth.currentUser.uid))
        const userData = documentSnapshot.data();
        // console.log(userData)
        setUser(userData);
        const isAdmin = userData.role == 'Admin'
        if(isAdmin){
         setShowResults(true)
        }        
    } catch (error) {
        //do whatever
        alert(error.message)
    }
};

// Get user on mount
useEffect(() => {
    getUser()
  
}, []);
  const handleSignOut = () => {
      auth
          .signOut()
          .then(() => {
              navigation.replace("Login")
          })
          .catch(error => alert(error.message))
  }
 
  return (
      <View style={styles.container}>

          <Text style={styles.welcome}>{user && user?.fullName}</Text>
          {/* <Text>Email: {auth.currentUser?.email}</Text>
   */}

          <View>
              <Text style={styles.welcome}> Welcome to Smart RO!</Text>
          </View>
          <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('Announcement')}>
              <Text style={styles.buttonText}>Annoucements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('View Calendar')}>
              <Text style={styles.buttonText}>View Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('Leave Application Status')}>
              <Text style={styles.buttonText}>Approve Leave</Text>
          </TouchableOpacity>

         

          <TouchableOpacity style={styles.buttonsignout}
              onPress={() => handleSignOut()}>
              <Text style={styles.signoutText}>Sign out</Text>
          </TouchableOpacity>
          
      </View>
  )
}

//#e6fcf4
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e6fcf4'
  },
  welcome: {
      fontSize: 32,
      fontWeight: '600',
      color: '#8D8D8D'
  },
  button: {
      backgroundColor: '#75eec8',
      width: '60%',
      padding: 30,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
  },
  buttonsignout: {
      backgroundColor: '#75eec8',
      width: '30%',
      padding: 25,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 20
  },
  signoutText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16
  }

})