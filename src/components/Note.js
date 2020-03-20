import React from 'react';
import '../App.css';
import { 
        ListItem,
        ListItemText,
        IconButton,
         } from '@material-ui/core'
 import DeleteIcon from '@material-ui/icons/Delete';



function PaperItem ({note, paperid, deleteNote, buttonDone}){
 const textStyle = (val) =>{
        var cal;
         if(val){ 
           cal = {textDecoration: "line-through"}
        }
        else{
           cal = {}
        }
        return cal  
      }
   return (
    <ListItem button  >
        <ListItemText primary={note.note}  style={textStyle(note.done)}  onClick={()=>buttonDone(paperid,note.id)} />
        <IconButton edge="end" aria-label="delete" onClick={()=>deleteNote(paperid, note.id)}>
                      <DeleteIcon />
         </IconButton>
    </ListItem>
    )
}
export default PaperItem;
