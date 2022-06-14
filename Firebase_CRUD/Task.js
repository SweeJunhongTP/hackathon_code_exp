import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from '../firebase'

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



  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
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