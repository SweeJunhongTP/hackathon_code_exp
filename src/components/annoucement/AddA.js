import Modal from './AModal'
import {useState} from 'react'
import './addA.css'
import { auth, db } from '../../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import {StyleSheet}from 'react-native'
function AddAnnoucment({onClose, open}) {

  const [message, setMessage] = useState('')


  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'Announcement'), {
        message: message,
        by: auth.currentUser.email,
        published: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert("addA" + err)
    }
  }

  return (
    <Modal modalLable='Published Announcement' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <textarea 
          type='text' 
          name='message' 
          onChange={(e) => setMessage(e.target.value)} 
          value={message}
          placeholder='Enter you announcements'/>
          
          
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddAnnoucment

const styles = StyleSheet.create({


})