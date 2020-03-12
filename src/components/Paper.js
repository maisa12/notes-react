import React from 'react';
import { 
        ListItem,
        ListItemText,
        IconButton,
         } from '@material-ui/core'
 import DeleteIcon from '@material-ui/icons/Delete';



function PaperItem ({paper, list, state, paperid}){
    const deletePaper = (id)=>{
        fetch(`http://localhost:8000/del/${id}`).then(list()).catch((error)=>{console.log(error)})
       }
   return (
    <ListItem button  >
        <ListItemText primary={paper.name} onClick={()=>{
            paperid(paper.id)
              state();
        }} />
        <IconButton edge="end" aria-label="delete" onClick={()=>deletePaper(paper.id)}>
                      <DeleteIcon />
         </IconButton>
    </ListItem>
    )
}
export default PaperItem;
