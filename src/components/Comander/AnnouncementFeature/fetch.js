
import React ,{ useState, useEffect } from 'react'
import { firebase } from '../../../../firebase'

import { FlatList, View, StyleSheet,Pressable,Text} from 'react-native'




const Fetch=()=>{
const [Announcement,setAnnouncement] = useState([])
const AnnRef = firebase.firestore().collection('Announcement')
useEffect(async () =>{
    AnnRef.onSnapshot(
        querySnapshot=>{
            const Announcement = []
            querySnapshot.forEach((doc)=>{
                const {message, by, published} = doc.data()
                Announcement.push({
                    id: doc.id,
                    message, 
                    published,
                    by
                })
            })
            setAnnouncement(Announcement)
        }
    )
},[])
    


return(
    <View style={{flex:1, marginTop:100}}>
        <FlatList
        style={{height:'100%'}}
        data={Announcement}
        numColumns={1}
        renderItem={
            ({item}) => (
                <Pressable style={styles.container}>
                    <View style={styles.innerContainer}>
                         <Text style={styles.itemHeader}>{item.by}</Text>
                    <Text style={styles.itemText}>{item.Message}</Text>
                    <Text style={styles.itemText}>{item.published}</Text>
                    </View>
                   
                </Pressable>
            )
        }
></FlatList>
    </View>
)
}
export default Fetch
const styles = StyleSheet.create({
    container:{
       backgroundColor:'',
       padding:15,
       borderRadius: 15,
       margin: 5,
       marginHorizontal:10
    },
    innerContainer:{
alignItems:'center',
flexDirection:'column'
    },
    itemHeader:{
fontWeight:'bold'
    },
    itemText:{
fontWeight:'300'
    }
})