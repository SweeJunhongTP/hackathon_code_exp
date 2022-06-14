//import './announcement.css'
import {View } from 'react-native'
import React ,{useState,useEffect} from 'react'
import AnnouncementItem from './AnnouncementItem'
import { doc, updateDoc, deleteDoc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase";


function Announcement({id, message, by, published}) {


  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

    
  return (
    
    <div className='task--borderColor'>       
      <div className='task__body'>
        <h6>Published by: {by} : </h6>
        <p>Annoucement: {message}</p>
        <div className='task__buttons'>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <AnnouncementItem 
          onClose={handleClose} 
          message={message} 
          by={by}
          published={published}
          open={open.view} />
      }

     

    </div>
  )
}

export default Announcement