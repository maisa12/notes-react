import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Note from './Note.js';


function NoteList({match}){
    const[item, setItem]=useState([]);
    const[value, setValue] = useState({note: ""});
    useEffect(()=>{
      lists()
  })
    const lists= () => {
      fetch(`http://localhost:8000/papers/${match.params.id}`)
                 .then((response)=> response.json())
                 .then(obj=>setItem(obj))
   }
   const del=(id, index)=>{
    fetch(`http://localhost:8000/delete/${id}/${index}`)
  }
  const done=(id, index)=>{
    fetch(`http://localhost:8000/done/${id}/${index}`)
  }
    return (
      <div>
      <div  className = "input">  
        <input type="text" value={value.note} className="inputtext" placeholder="Add your note here" onChange={(e)=>{
        setValue({note:`${e.target.value}`})
        }}/>
        <button className="but"  onClick={()=>{
          fetch(`http://localhost:8000/newnote/${match.params.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
          }).then( setValue({note: ""})).then(lists())
        }}><i className="fa fa-plus"></i> Add</button>
        </div>
    <div className="main">
      <Link to="/">Back</Link>
           <div className = "checkbox">
          {item.map((x, index)=>(
            <Note value={x.value} id={x.id} done={x.done} key={x.id} btdone={done} paperid={match.params.id} del={del}/>
          ))
          }
           </div> 
    </div>
    </div>)
    
}

export default NoteList;

