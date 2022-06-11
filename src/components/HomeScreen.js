import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { auth } from '../../firebase'
import {useNavigation} from '@react-navigation/core'
import { Calendar } from 'react-native-calendars';

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () =>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
    {/* <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button}
      onPress={handleSignOut}>
          <Text style ={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
      
      <View>
        <Text style={styles.welcome}> Welcome to Smart RO!</Text>
    </View>

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate('ViewCalendar')}>
        <Text style ={styles.buttonText}>View Calendar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate('ApplyLeave')}>
        <Text style ={styles.buttonText}>Apply for Leave</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate('ApproveLeave')}>
        <Text style ={styles.buttonText}>Approve Leave</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonsignout}
      onPress={()=>navigation.navigate("Login")}>
          <Text style ={styles.signoutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F4FBFF'
    },
    welcome: {
        fontSize: 32,
        fontWeight: '600',
        color: '#8D8D8D'
    },
    button:{
        backgroundColor:'#75C6EE',
        width:'60%',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonsignout:{
        backgroundColor:'#75C6EE',
        width:'30%',
        padding:25,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 28
    },
    signoutText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 24
    }

})