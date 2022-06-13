import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native-web';



export default function Applyleave() {

  return (

    <View style={styles.container1}>

      <KeyboardAvoidingView style={styles.container2}
        behavior="padding">

        <View>
          <Text style={styles.startdate}>Starting date of Leave (DD/MM/YYYY):</Text>
          <Text style={styles.leaveblank}>blank</Text>
          {//leaveblank is for spacing purposes
          }
        </View>


        <View style={styles.inputContainer}>
          {//inputContainer is the physical rectangle
          }
          <TextInput
            placeholder="11/11/2022"
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
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.buttonsignout}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.signoutText}>Submit</Text>
      </TouchableOpacity>

    </View>

  )
}





const styles = StyleSheet.create({

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



});




