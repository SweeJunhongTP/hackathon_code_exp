// import './Amanager.css'
import { StyleSheet } from 'react-native'
import Announcement from './Announcement'
import AddAnnoucment from './AddA'
import react ,{ useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, getDoc, doc } from "firebase/firestore"
import {db,auth} from "../../../firebase";


function Amanager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState(null)
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
const [showResults, setShowResults] = useState(false)

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
    <div style={styles.taskManager}>
      <div style={styles.taskManager__container}>
      {showResults ? (
           <button 
          onClick={() => setOpenAddModal(true)}>
          Add Annoucement +
        </button>

        ) : null}
       
        <div style={styles.taskManager__tasks}>

          {tasks.map((task) => (
            <Announcement
              id={task.id}
              key={task.id}
              message={task.data.message}
              by={task.data.by}
              published={task.data.published}
            />
          ))}

        </div>
      </div>
      {openAddModal &&
        <AddAnnoucment onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default Amanager

const styles = StyleSheet.create({
  taskManager: {
    padding: "25px 20px",
    backgroundColor: "hsl(210, 12%, 15%)",
    color: "white",
    fontSize: "28px",
    fontFamily: "cursive"
  },
  taskManager__container:{
    width: "95%",
    margin: "50px auto 0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  taskManager__tasks:{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px"
  }
})