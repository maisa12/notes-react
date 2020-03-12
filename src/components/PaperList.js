import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import {
  Paper,
  List,
} from '@material-ui/core';
import PaperAppBar from './PaperAppBar'
import PaperItem from './Paper'



function PaperList({state, paperid}){
    useEffect(()=>{
        list()
    }, [])
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen = () => {
      setOpen(true);
    };

    const[paperList, setPaperList]=useState([]);
    const[value, setValue]=useState({name:""});
    const [open, setOpen] =useState(false);
    const list= () => {
      fetch('http://localhost:8000/papers')
                 .then((response)=> response.json())
                 .then((obj)=>setPaperList(obj))
                 .catch((error)=>{console.log(error)})
   }
   const add = async()=>{
    await fetch("http://localhost:8000/newpaper", {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(value)
   }).catch((error)=>{console.log(error)}) 
   handleClose();
   list()    
 }
 const props ={
  handleClose, handleClickOpen, open, setValue, add, 
 }
    return (
    <div>
<PaperAppBar props={props}/>    
    <Paper elevation={3} style={{width: "50%", marginLeft: "25%"}}>
        {paperList.map(paper=>(
         
            <List key={paper.id}  aria-label="Papers">
              <PaperItem key={paper.id} paper={paper} list={list} state={state} paperid={paperid}/>
            </List>
         
        )
        )}
    </Paper>
 </div>
    )
    
}

export default PaperList;

