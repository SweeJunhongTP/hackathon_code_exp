import AModal from "./AModal"


function AnnouncementItem({onClose, open, by, message,published}) {

  return (
    <AModal modalLable='Announcement' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h6>Published by: {by}</h6>
        <p>Message: {message}</p>
      <p> Date: {published}</p>
      </div>
    </AModal>
  )
}

export default AnnouncementItem