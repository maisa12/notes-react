import React from 'react';
import '../App.css';
import { 
        ListItem,
        ListItemText,
        IconButton,
         } from '@material-ui/core'
 import DeleteIcon from '@material-ui/icons/Delete';



function PaperItem ({note, paperid, deleteNote, btdone}){
 const buttn = (val) =>{
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
    <ListItem button onClick={()=>btdone(paperid,note.id)} >
        <ListItemText primary={note.value}  style={buttn(note.done)}   />
        <IconButton edge="end" aria-label="delete" onClick={()=>deleteNote(paperid, note.id)}>
                      <DeleteIcon />
         </IconButton>
    </ListItem>
    )
}
export default PaperItem;
