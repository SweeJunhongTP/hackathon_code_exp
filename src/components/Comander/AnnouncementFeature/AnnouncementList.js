import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState,useEffect }  from 'react'
import { collection, getDocs} from "firebase/firestore"

import Fetch from './fetch'



export default function AnnouncementList() {
 
  

  return (
    <View style={styles.container}>

    <Fetch/>
    </View>
);

}


const styles = StyleSheet.create({
    container: {
     
    }
  });