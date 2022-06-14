import Modal from "./Modal"
import './taskItem.css'


function TaskItem({onClose, open, startdate, remarks,duration,overseas,country}) {

  return (
    <Modal modalLable='Applied Leave' onClose={onClose} open={open}>
      <div style={styles.taskItem}>
        <h2>Applying for {startdate}: </h2>
        <p>Duration: {duration}</p>
        <p>Overseas: {overseas}</p>
        <p>Country:{country}</p>
        <p>Remarks: {remarks}</p>
      
        
      </div>
    </Modal>
  )
}

export default TaskItem

const styles = StyleSheet.create({
   taskItem:{ 
    marginTop: "20px"
   }
})