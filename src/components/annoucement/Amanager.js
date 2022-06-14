



import './Amanager.css'
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
    <div className='taskManager'>
      <div className='taskManager__container'>
      {showResults ? (
           <button 
          onClick={() => setOpenAddModal(true)}>
          Add Annoucement +
        </button>

        ) : null}
       
        <div className='taskManager__tasks'>

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

