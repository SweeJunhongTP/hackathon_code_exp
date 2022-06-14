import { KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'
import {auth, db} from '../../firebase'
import 'firebase/compat/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/core'
export default function SignUp() {
   
    function handleChange(text,eventName){
        setValues(prev=>{
            return{
                ...prev,
                [eventName]:text
            }
        })
    }
    const[values, setValues] = useState({
        email:'',
        password:'',
        confirmPwd:'',
        fullName:'',
    })
    const navigation = useNavigation()
    const Register=()=> {

        const {email, password,confirmPwd,fullName,role} = values
    
        if (password == confirmPwd){
            auth.createUserWithEmailAndPassword(email, password)
            .then(()=>{
                setDoc(doc(db, "Users",auth.currentUser.uid),{
                    uid: auth.currentUser.uid,
                    fullName,
                    role:'User',
                    email
                })
                navigation.replace("Dashboard")
            })
          
              .catch(error => console.log(error.message))
              
          }
    }

    return (
        <KeyboardAvoidingView
            style={styles.wholecontainer}
            behavior="padding">
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter New Email"
                   
                    onChangeText={text => handleChange(text,"email")}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter Your Fullname"
                   
                    onChangeText={text => handleChange(text,"fullName")}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Role"
                 
                    onChangeText={text => handleChange(text,"role")}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter New Password"
                  
                    onChangeText={text => handleChange(text,"password")}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Confirm New Password"
                  
                    onChangeText={text => handleChange(text,"confirmPwd")}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                //onPress={handleSignUp}
                onPress={() => Register()}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    wholecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4FBFF'
    },
    container: {
        width: '80%',
        borderRadius: 10,
        borderColor: '#C4C4C4',
        borderWidth: 2,
        marginTop: 4
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
       //  marginTop: 5,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 35,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },

})