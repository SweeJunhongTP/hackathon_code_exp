import { KeyboardAvoidingView, StyleSheet, Text, View, Image, } from 'react-native'
import React, { useState, useEffect, Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'

import { useNavigation } from '@react-navigation/core'
import { db,auth } from '../../../firebase'

export default function CommanderLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleLogin = () => {
      auth.signInWithEmailAndPassword(email, password)
        .then(userCredentails => {
          const user = userCredentails.user;
          console.log('logged in with', user.email);
          navigation.replace("Commander Dashboard")
        })
        .catch(error => alert(error.message))
    }
    const navigation = useNavigation()
    // useEffect(()=>{
    //    const unsubscribe = auth.onAuthStateChanged(user=>{
    //         if(user.role == 'Commander'){
    //             navigation.replace("Commander Dashboard")
    //         }
    //     })
    //     return unsubscribe
    // },[])
    return (

        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding">
          <View>
            < Image
              style={{ width: 300, height: 200, borderRadius: 10 }}
              source={require('../../../assets/cat_status_update.png')} />
          </View>
    
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
    
          <View style={styles.buttonContainer}>
          
    {/* Create account for commander */}
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}>
              <Text style={styles.buttonText}>Com Login</Text>
            </TouchableOpacity>
            
            {/* Sign up as commander*/}
            <TouchableOpacity
              onPress={()=>navigation.navigate('Comm Register')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Com Sign Up</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      )
    }
    

  
  const styles = StyleSheet.create({
    container1: {
      wdith: 250,
      height: 250
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6fcf4'
    },
    inputContainer: {
      width: '80%',
      borderRadius: 10,
      borderColor: '#75eec8',
      borderWidth: 2,
      marginTop: 16,
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      //  marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#75eec8',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop:10
    },
 
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
   
  
  })