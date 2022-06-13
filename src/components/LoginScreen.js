import { KeyboardAvoidingView, StyleSheet, Text, View, Image, } from 'react-native'
import React, { useState, useEffect, Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'

import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredentails => {
        const user = userCredentails.user;
        console.log('logged in with', user.email);
      })
      .catch(error => alert(error.message))
  }
  const navigation = useNavigation()
  useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(user=>{
          if(user){
              navigation.replace("Dashboard")
          }
      })
      return unsubscribe
  },[])
  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
      <View>
        < Image
          style={{ width: 300, height: 200, borderRadius: 10 }}
          source={require('../../assets/cat_status_update.png')} />
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
        <TouchableOpacity
          onPress={handleLogin}
         // onPress={() => navigation.navigate('Dashboard')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate('SignUp')}
          
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
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
    backgroundColor: '#F4FBFF'
  },
  inputContainer: {
    width: '80%',
    borderRadius: 10,
    borderColor: '#75C6EE',
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
    backgroundColor: '#75C6EE',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#75C6EE',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#75C6EE',
    fontWeight: '700',
    fontSize: 16,
  },


})