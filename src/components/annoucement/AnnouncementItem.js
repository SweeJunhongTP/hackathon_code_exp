import AModal from "./AModal"


function AnnouncementItem({onClose, open, by, message,published}) {

  return (
    <AModal modalLable='Annoucement' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>Published by: {by}  on {published}</h2>
        <p>Message: {message}</p>
      
     
      
        
      </div>
    </AModal>
  )
}

export default AnnouncementItem