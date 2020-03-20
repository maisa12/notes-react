import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Note from './Note.js';
import NoteAppBar from './NoteAppBar';
import {
    Paper,
    List,
  } from '@material-ui/core';

function NoteList({id, state}){
    useEffect(()=>{
        lists()
    }, [])
   
    const[noteList, setNoteList]=useState([]);
    const[value, setValue]=useState({note:""});
    const [open, setOpen] =useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleClickOpen = () => {
        setOpen(true);
      };
    const lists= () => {
      fetch(`http://localhost:8000/papers/${id}`)
                 .then((response)=> response.json())
                 .then(obj=>setNoteList(obj))
                 .catch((error)=>{console.log(error)}) 
   }
   const deleteNote=(id, index)=>{
    fetch(`http://localhost:8000/delete/${id}/${index}`).then(()=>lists()).catch((error)=>{console.log(error)}) 
  }
  const done=(id, index)=>{
    fetch(`http://localhost:8000/done/${id}/${index}`).then(()=>lists()).catch((error)=>{console.log(error)})    
  }
 
const add = async()=>{
    await fetch(`http://localhost:8000/newnote/${id}`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(value)
   }).catch((error)=>{console.log(error)}) 
   handleClose();
   lists()    
 }
 const props ={
    handleClose, handleClickOpen, open, setValue, add, 
   }
    return (
      <div>
     <NoteAppBar props={props} id={id} state={state} />
     <Paper elevation={3} style={{width: "50%", marginLeft: "25%"}}>
          {noteList.map((note, index)=>(
          <List key={index}  aria-label="Papers">
            <Note note={note} buttonDone={done} paperid={id} deleteNote={deleteNote}/>
            </List>
          ))
          }
     </Paper>      
    </div>)
    
}

export default NoteList;