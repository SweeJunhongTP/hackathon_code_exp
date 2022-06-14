
import './modal.css'


function Modal({open, modalLable, children, custom_modal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (

      <div className='modalContainer' onClick={handleClose}>
        <div className= {`modal ${custom_modal}`}>
          <div className='modal__head'>

            <h2>{modalLable}</h2>
            <span style={styles.modal__close} onClick={onClose}>x</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
      position: "fixed",
      width: "100vw",
      height: "100%",
      display: "flex",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    modal: {
      width: "90%",
      maxWidth: "500px",
      border: "5px",
      padding: "20px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      boxSizing: "border-box"
    },
    modal__head: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative"
    },
    modal__close: {
      position: "absolute",
      top: "0",
      right: "0",
      fontSize: "24px",
      fontWeight: 500,
      cursor: "pointer"
    },
    
  
})