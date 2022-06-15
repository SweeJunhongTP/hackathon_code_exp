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
         
          <View style={styles.catcontainer}>
        <Text style={styles.cat}>
          CAT STATUS UPDATE
        </Text>
        <Text style={styles.catcontent}>
        CAT 1:
        </Text>
        <Text style={styles.catcontent}>
        (0720-0900)
        </Text>
        <Text style={styles.catcontent}>
          1N,1S,L1,L2,L3,L4,02,3S,3N,
        </Text>
        <Text style={styles.catcontent}>
        04,05,06,07,8N,8S,09,14
        </Text>
        <Text style={styles.catcontent}>
        (0740-0900)
        </Text>
        <Text style={styles.catcontent}>
        10N,10S,11W,11E,12,13N,13S,
        </Text>
        <Text style={styles.catcontent}>
        16N,16S,17,18W,18E,19N,19S
        </Text>
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
              onPress={()=>navigation.navigate('Commander Register')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Com Sign Up</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      )
    }
    

  
  const styles = StyleSheet.create({
    catcontainer: {
      backgroundColor: '#2c3b6a',
      borderRadius: 10,
      opacity: .8
    },
      cat: {
      color: '#7185b7',
      fontWeight: '1000',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 50,
      borderRadius: 15,
      marginRight: 50,
      marginTop: 15,
      marginBottom: 25
    },
    catcontent: {
      color: '#d9d9d9',
      fontWeight: 500,
      fontSize: 16,
      alignItems: 'center',
      justifyContent:'center',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 5
    },
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