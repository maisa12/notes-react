import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function PaperList(){

    const[item, setItem]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:8000/papers')
      .then((response)=> response.json())
      .then(obj=>setItem(obj))
    })
   
    return (
    <div className="main">
        {item.map(x=>
          (<p key={x.id}  ><span className="paperlist"><em>Name</em>: {x.name}  <em>Amount</em>: {x.amount}</span>  <Link to={`/papers/${x.id}`}>read</Link></p> )
        )}
    </div>)
    
}

export default PaperList;

