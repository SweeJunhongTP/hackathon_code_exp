
import Task from './Task'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'
import { StyleSheet } from 'react-native-web'
//import style from './taskManager.css';

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(collection(db, 'Leaves'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))

      console.log(tasks)
    })
  }, [])

  return (
    <div style={style.taskManager}>
      <div style={style.taskManager__container}>

        <div style={style.taskManager__tasks}>

          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              status={task.data.status}
              duration={task.data.duration}
              country={task.data.country}
              overseas={task.data.overseas}
              startdate={task.data.startdate}
              remarks={task.data.remarks}
            />
          ))}

        </div>
      </div>


    </div>
  )
}

export default TaskManager
