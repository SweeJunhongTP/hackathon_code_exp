import { KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView
            style={styles.wholecontainer}
            behavior="padding">
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter New Email"
                    value={email}
                    onChangeText={text => setNewEmail(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter New Password"
                    value={password}
                    onChangeText={text => setNewPassword(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Confirm New Password"
                    value={password}
                    onChangeText={text => setNewPassword(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                //onPress={handleSignUp}
                onPress={() => navigation.navigate('SignUp')}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>



    )
}

export default SignUp

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