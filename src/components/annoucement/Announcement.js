import './announcement.css'
import {View, StyleSheet } from 'react-native'
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
    
    <div style={styles.task_borderColor}>       
      <div style={styles.task__body}>
        <h6>Published by: {by} : </h6>
        <p>Annoucement: {message}</p>
        <div style={styles.task__buttons}>
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

const styles = StyleSheet.create({
  task__body:{
    display: "flex", 
    flexDirection: "column", 
    flexGrow: 1 
  },
  task__buttons:{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    alignItems: "center"
  },
  task_borderColor:{
    borderColor: "green",
    boxShadow: "0 6px 18px -9px hsl(210, 15%, 65%)"
  }
})