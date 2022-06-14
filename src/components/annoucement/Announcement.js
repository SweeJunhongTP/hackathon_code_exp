

// function Announcement({id, message, by, published}) {


//   const [open, setOpen] = useState({edit:false, view:false})

//   const handleClose = () => {
//     setOpen({edit:false, view:false})
//   }

    
//   return (
    
//     <View style={styles.task_borderColor}>       
//       <View style={styles.task__body}>
//         <h6>Published by: {by} : </h6>
//         <p>Annoucement: {message}</p>
//         <TouchableOpacity style={styles.task__buttons}>
//           <Text 
//             onClick={() => setOpen({...open, view: true})}>
//             View
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {open.view &&
//         <AnnouncementItem 
//           onClose={handleClose} 
//           message={message} 
//           by={by}
//           published={published}
//           open={open.view} />
//       }

     

//     </View>
//   )
// }

// export default Announcement

// const styles = StyleSheet.create({
//   task__body:{
//     display: "flex", 
//     flexDirection: "column", 
//     flexGrow: 1 
//   },
//   task__buttons:{
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "30px",
//     alignItems: "center"
//   },
//   task_borderColor:{
//     borderColor: "green",
//     boxShadow: "0 6px 18px -9px hsl(210, 15%, 65%)"
//   }
// })


// import Modal from '@material-ui/core/Modal';
// import './announcement.css'
// import {View, StyleSheet } from 'react-native'
// import React ,{useState,useEffect} from 'react'
// import AnnouncementItem from './AnnouncementItem'
// import { doc, updateDoc, deleteDoc, getDoc} from "firebase/firestore";
// import {db} from "../../../firebase";
// import { TouchableOpacity } from 'react-native-web';


// export class  Announcement extends Component {
// constructor() {
//   super();
//   this.state = {
//     modalOpen: false,
//     snackOpen: false,
//     modalDeleteOpen: false,
//   };
// }

      
// handleModalOpen = () => {
//   this.setState({ modalOpen: true });
// }

// handleModalClose = () => {
//   this.setState({ modalOpen: false });
// }

//   render() {
//     let {list} = this.props;
//     return (
//       <View style={styles.container}>
//         <FlatList
//           numColumns={4}
//           data={list}
//           renderItem={({ item}) => (
//             <View style={styles.views}>
//               <TouchableOpacity style={styles.touch} >
                 
//                   <ImageBackground
//                   style={styles.img}
//                   onClick={() => this.handleModalOpen()}
//                   >
//                   { item.photo }
//                   </ImageBackground>
//                   <Modal
//                    open={this.state.modalOpen}
//                    onClose={this.handleModalClose}
//                    closeAfterTransition
//                   >
//                       <Text style={styles.txt}>{item.name}</Text>
//                       <Text style={styles.txt}>{item.key}</Text>
//                       <Text style={styles.txt}>{item.describtion}</Text>
//                   </Modal>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }
// }
