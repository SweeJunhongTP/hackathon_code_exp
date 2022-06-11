import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native-web';


const Applyleave = () => {
  return (

    <View style={styles.container1}> 
      
      <KeyboardAvoidingView style={styles.container2}
      behavior="padding">

        <View style={styles.container}>
          <Text style={styles.startdate}>Starting date of Leave:</Text>
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
        
        <View style={styles.container}>
          <Text style={styles.duration}>Duration of Leave:</Text>
          <Text style={styles.leaveblank}>blank</Text>

        </View>


        <View style={styles.inputContainer}>
          <TextInput
            placeholder="2 Days"
            style={styles.content_Container}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.overseas}>Overseas:</Text>
          <Text style={styles.leaveblank}>blank</Text>

        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Yes"
            style={styles.content_Container}
          />
        </View>


        <View style={styles.container}>
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



    
    </View>
    

      
  )
}





const styles = StyleSheet.create({
  
  container1:{
    marginTop:0,
    backgroundColor:'#F4FBFF'

  },

  container2:{
    flex:1,
    //justifyContent:'center',
    marginTop: 80,
    backgroundColor:'#F4FBFF',
  },

  leaveblank:{
    fontSize: 13,
    color:'#F4FBFF',


  },


  startdate:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 9,
    marginLeft: 70,

  },

  duration:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 12,
    marginLeft: 70,
  },

  overseas:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 15,
    marginLeft: 70,
  },

  country:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 18,
    marginLeft: 70,
  },

  remarks:{
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 21,
    marginLeft: 70,
  },

  inputContainer: {
    width: '75%',
    borderColor: '#000000',
    borderWidth: 2,
    alignItems:'left',
    height: 40,
    marginLeft: 70
   

  },

  content_Container:{
    borderColor:'#F4FBFF',
    backgroundColor: '#F4FBFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    height:40,
  
  },

  content_Container_remarks:{
    borderColor:'#F4FBFF',
    backgroundColor: '#F4FBFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    height:170,
  
  },

  remarkContainer: {
    width: '75%',
    borderColor: '#000000',
    borderWidth: 2,
    marginTop: 4,
    alignItems:'left',
    height: 170,
    marginLeft: 70
    
  
  }


  
});




export default Applyleave

