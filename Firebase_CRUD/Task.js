
import './task.css'
import {View } from 'react-native'

import React ,{useState,useEffect} from 'react'
import TaskItem from './TaskItem'
import { doc, updateDoc, deleteDoc, getDoc} from "firebase/firestore";
import { db, auth } from '../firebase'

function Task({id, startdate, remarks, status, duration, overseas,country}) {

  const [checked, setChecked] = useState(status)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'Leaves', id)
    try{
      await updateDoc(taskDocRef, {
        status: checked
      } )
    } catch (err) {
      alert(err)
    }
    
  }
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
        //do whatever
        alert(error.message)
    }
};

// Get user on mount
useEffect(() => {
    getUser()
  
}, []);
const [showResults, setShowResults] = React.useState(false)

  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
      
        {showResults ? (
          <div>

            <input
              id={`checkbox-${id}`}
              className='checkbox-custom'
              name="checkbox"
              checked={checked}
              onChange={handleChange}
              type="checkbox" />
          <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>

        ) : null}

       
      <div className='task__body'>
        <h2>Applying for {startdate} : </h2>
        <p>Remarks: {remarks}</p>
        <div className='task__buttons'>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <TaskItem 
          onClose={handleClose} 
          startdate={startdate} 
          duration={duration}
          overseas={overseas}
          country={country}
          remarks={remarks} 
          open={open.view} />
      }

     

    </div>
  )
}

export default Task