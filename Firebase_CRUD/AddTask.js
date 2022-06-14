import Modal from './Modal'
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
// import './addTask.css'
import { db } from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTask({onClose, open}) {

  const [startdate, setStartDate] = useState('')
  const [duration, setDur] = useState('')
  const [overseas, setOver] = useState('')
  const [country, setCoun] = useState('')
  const [remarks, setRem] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'Leaves'), {
        startdate: startdate,
        duration: duration,
        overseas:overseas,
        country:country,
        remarks:remarks,
        status:false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Apply Leave' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} style={styles.addTask} name='addTask'>
        <input 
          type='text' 
          name='startdate' 
          onChange={(e) => setStartDate(e.target.value)} 
          value={startdate}
          placeholder='Enter start date:DD/MM/YYYY'/>
           <input 
          type='text' 
          name='duration' 
          onChange={(e) => setDur(e.target.value)} 
          value={duration}
          placeholder='Enter duration (day): 2'/>
           <input 
          type='text' 
          name='overseas' 
          onChange={(e) => setOver(e.target.value)} 
          value={overseas}
          placeholder='Are you going overseas'/>
           <input 
          type='text' 
          name='country' 
          onChange={(e) => setCoun(e.target.value)} 
          value={country}
          placeholder='If yes which country ?'/>
        
        <textarea 
          onChange={(e) => setRem(e.target.value)}
          placeholder='remarks'
          value={remarks}></textarea>
          
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask

const styles = StyleSheet.create({
        addTask: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
          zIndex: 100
        },
        
})