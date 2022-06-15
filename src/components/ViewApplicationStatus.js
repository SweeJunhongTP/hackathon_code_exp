import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import './viewAppstatus.css'
import Task from '../../Firebase_CRUD/Task'

import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'

export default function ViewApplicationStatus() {
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
      <div className='taskManager'>
        <div className='taskManager__container'>
  
          <div className='taskManager__tasks'>
  
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

const styles = StyleSheet.create({
  viewApplication: {
    padding: "25px 20px",
    backgroundColor: "hsl(210, 12%, 15%)",
    color: "white",
    fontSize: "28px",
    fontFamily: "cursive"
  },
  viewApplication__container:{
    width: "95%",
    margin: "50px auto 0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  viewApplication__task:{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px"
  }
})