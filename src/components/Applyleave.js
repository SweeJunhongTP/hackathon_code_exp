import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native-web';
import { doc, addDoc,setDoc,collection ,Timestamp} from 'firebase/firestore';
import {auth, db} from '../../firebase'
import { useNavigation } from '@react-navigation/core'




export default function Applyleave() {
  const navigation = useNavigation()
  function handleChange(text,eventName){
    setValues(prev=>{
        return{
            ...prev,
            [eventName]:text
        }
    })
}
const[values, setValues] = useState({
    startdate:'',
    duration:'',
    overseas:'',
    country:'',
    remarks:''
})

// function to add new task to firestore 
const handleSubmit = () => {
  const {startdate, duration, overseas, country, remarks,status} = values
    addDoc(collection(db, "Leaves"),{
        uid: auth.currentUser.uid,
        fullName:auth.currentUser.email,
        startdate,
        duration,
        overseas,
        country,
        remarks,
        created: Timestamp.now(),
        status:false,
    })   
     alert("Applied successful")
    navigation.replace("Dashboard")
 
}

return (

    <View style={styles.container1}>

      <KeyboardAvoidingView style={styles.container2}
        behavior="padding">

        <View>
          <Text style={styles.startdate}>Starting date of Leave (DD/MM/YYYY):</Text>
          <Text style={styles.leaveblank} >blank</Text>
          {//leaveblank is for spacing purposes
          }
        </View>


        <View style={styles.inputContainer}>
          {//inputContainer is the physical rectangle
          }
          <TextInput
          date
            placeholder="11/11/2022"
            onChangeText={text =>handleChange(text,"startdate")}
            style={styles.content_Container}
          />
        </View>
        {
          //content_Container is for the text input
        }

        <View>
          <Text style={styles.duration}>Duration of Leave:</Text>
          <Text style={styles.leaveblank}>blank</Text>
        </View>


        <View style={styles.inputContainer}>
          <TextInput
            placeholder="2 Days"
            onChangeText={text =>handleChange(text,"duration")}
            style={styles.content_Container}
          />
        </View>

        <View>
          <Text style={styles.overseas}>Overseas:</Text>
          <Text style={styles.leaveblank}>blank</Text>

        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Yes"
            style={styles.content_Container}
            onChangeText={text =>handleChange(text,"overseas")}
          />
        </View>


        <View>
          <Text style={styles.country}>If yes, please select country:</Text>
          <Text style={styles.leaveblank}>blank</Text>

        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Malaysia"
            style={styles.content_Container}
            onChangeText={text =>handleChange(text,"country")}
          />
        </View>


        <View style={styles.container}>
          <Text style={styles.remarks}>Remarks:</Text>
          <Text style={styles.leaveblank}>blank</Text>
        </View>

        <View style={styles.remarkContainer}>
          {//remarkContainer is like inputContainer but with longer height, same with content_Container_remarks and content_Container

          }
          <TextInput
            style={styles.content_Container_remarks}
            onChangeText={text =>handleChange(text,"remarks")}
          />
        </View>
        <TouchableOpacity
                //onPress={handleSignUp}
                onPress={handleSubmit}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Submit</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  )
}




const styles = StyleSheet.create({
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 35,
    borderColor: '#0782F9',
    borderWidth: 2,
    marginLeft: 145
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  container1: {
    marginTop: 0,
    backgroundColor: '#F4FBFF'
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 80,
    backgroundColor: '#F4FBFF',
  },

  leaveblank: {
    fontSize: 8,
    color: '#F4FBFF',
  },


  startdate: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 40,
  },

  duration: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginLeft: 40,
  },

  overseas: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginLeft: 40,
  },

  country: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginLeft: 40,
  },

  remarks: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginLeft: 40,
  },

  inputContainer: {
    width: '75%',
    borderColor: '#000000',
    borderWidth: 2,
    alignItems: 'left',
    height: 40,
    marginLeft: 40
  },

  content_Container: {
    borderColor: '#F4FBFF',
    backgroundColor: '#F4FBFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    height: 40,

  },

  content_Container_remarks: {
    borderColor: '#F4FBFF',
    backgroundColor: '#F4FBFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    height: 170,
  },

  remarkContainer: {
    width: '75%',
    borderColor: '#000000',
    borderWidth: 2,
    marginTop: 4,
    alignItems: 'left',
    height: 170,
    marginLeft: 40

  },
  buttonsignout: {
    backgroundColor: '#75C6EE',
    width: '30%',
    padding: 25,
    borderRadius: 15,
    alignContent: 'center',
    marginLeft: 120,
    marginTop: 40,
  },
  signoutText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    alignContent: 'center',
    marginLeft: 10
  }
})