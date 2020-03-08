import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import Paper from './Paper.js';

function PaperList(){
    useEffect(()=>{
        list()
    }, [])
    const[item, setItem]=useState([]);
    const[value, setValue]=useState({name:""});
    const list= () => {
      fetch('http://localhost:8000/papers')
                 .then((response)=> response.json())
                 .then((obj)=>setItem(obj))
                 .catch((error)=>{console.log(error)})
   }
    return (
    <div>
      <div  className = "input">  
      <input type="text" value={value.name} className="inputtext" placeholder="Add your paper name here..." onChange={(e)=>{
      setValue({name:`${e.target.value}`})
      }}/>
      <button className="but"  onClick={async()=>{
         await fetch("http://localhost:8000/newpaper", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        }).catch((error)=>{console.log(error)}) 
        setValue({name:""});
        list()
       
      }}><i className="fa fa-plus"></i> Add</button>
      
  </div> 
    <div className="main">
        {item.map(x=>(<Paper key={x.id} name={x.name} id={x.id} amount={x.amount} list={list}/>)
        )}
    </div>
 </div>
    )
    
}

export default PaperList;

