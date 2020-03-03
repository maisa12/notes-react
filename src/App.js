import React from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  const [item, setItem]=useState([{value:"test1", id:0, done: true}, {value:"test2", id:1, done: false}]);
  var text;
  const[count, setCount] = useState(2);
  var del = [];
  
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
            setItem([...item.filter((x)=>del.indexOf(x.id)===-1)])
        }}><i className="fa fa-trash"></i> Delete</button>
    </div> 
  
   <div className="main">
        <span className="tdlist">
        List
        </span> 
      <div className="output">
        <div className = "checkbox">
          {item.map(x=>
               (<p className = "newlistp" key={x.id}>
               <input type="checkbox" className="newlistbox" id={x.id} onChange={()=>{
                del.indexOf(x.id) ===-1 ? del.push(x.id) : del.splice(del.indexOf(x.id),1)
               }}/>
               {!x.done ?(<span className="doneText">{x.value}</span>) : (<span className="undoneText">{x.value}</span>)}
               {!x.done ? (<button className="newlistbutton" id={x.id} onClick={()=>{
                item.forEach(t=>t.id===x.id? x.done=true: "")
                setItem([...item])
                }} >done</button>) : (<button className="unlistbutton" id={x.id} onClick={()=>{
                  item.forEach(t=>t.id===x.id? x.done=false: "")
                  setItem([...item])
                }}>undone</button>)
               }
               </p>)
          )}
           </div>
    </div>
   </div>

       <h2>&copy; 2020 N&M Group All rights reserved</h2>
</div>
  );
}

export default App;
