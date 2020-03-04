import React from 'react';
import './App.css';
import {useState} from 'react';
import Note from './note.js';
import {del} from './note.js';


function App() {
  const [item, setItem]=useState([{value:"test1", id:0, done: true}, {value:"test2", id:1, done: false}]);
  var text;
  const[count, setCount] = useState(2);

  return (
<div>
      <h1><i className="fa fa-list-ul"></i><em>  Online</em> Notepad</h1>
 
   
    <div  className = "input">  
        <input type="text" ref={element=>text=element} className="inputtext" placeholder="Add your note here"/>
        <button className="but"  onClick={()=>{
          setCount(count+1)
          setItem([...item, {value:text.value, id: count, done:false}])
        }}><i className="fa fa-plus"></i> Add</button>
        <button className="but" onClick={()=>{
           setItem([...item.filter((x)=>del().indexOf(x.id)===-1)])
        }}><i className="fa fa-trash"></i> Delete</button>
    </div> 
  
   <div className="main">
        <span className="tdlist">
        List
        </span> 
      <div className="output">
        <div className = "checkbox">
          {item.map(x=>(
            <Note value={x.value} id={x.id} done={x.done} key={x.id} sd={item} />
          ))
          }
           </div>
    </div>
   </div>
         
       <h2>&copy; 2020 N&M Group All rights reserved</h2>
</div>
  );
}


export default App;
