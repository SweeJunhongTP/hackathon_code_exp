
import react ,{ useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, getDoc, doc } from "firebase/firestore"
//import {db,auth} from "../../../firebase";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

function Amanager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const getUser = async () => {
    try {
        const documentSnapshot = await getDoc(doc(db, 'Users', auth.currentUser.uid))
        const userData = documentSnapshot.data();
        // console.log(userData)
        setUser(userData);
        const isAdmin = userData.role == 'Commander'
        if(isAdmin){
         setShowResults(true)
        }        
    } catch (error) {
        console.log(error)
    }
};
// Get user on mount
useEffect(() => {
    getUser()
  
}, []);


  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(collection(db, 'Announcement'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))

      console.log(tasks)
    })
  }, [])

  return (
    <view>
       <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setOpenAddModal(true)}
      >
        <Text style={styles.textStyle}>Add Annoucement +</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openAddModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpenAddModal(!openAddModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {tasks.map((task)=>{
              <Announcement
              by={task.data.by}
              message={task.data.message}
              publised={task.data.published}/>
            })}
            <Text style={styles.modalText}>{tasks.data.message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpenAddModal(!openAddModal)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </view>
    
  )
}

export default Amanager

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
