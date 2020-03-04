import React from 'react';
import {useState} from 'react';
var delArr = [];



export function del(){
   
    return delArr
}
function Note ({value, id, done, sd}){
     const [sdone, setDone]=useState(done);
    
   return (<p className = "newlistp" key={id}>
               <input type="checkbox" className="newlistbox" id={id} onChange={()=>{
                 delArr.indexOf(id) ===-1 ? delArr.push(id) : delArr.splice(delArr.indexOf(id),1)
              }
                }/>
               {!sdone ?(<span className="doneText">{value}</span>) : (<span className="undoneText">{value}</span>)}
               {!sdone ? (<button className="newlistbutton" id={id} onClick={()=>{
             
                sd.filter(x=>x.id===id)[0].done=true;
              console.log(sd)
              setDone(!sdone)
                }} >done</button>) : (<button className="unlistbutton" id={id} onClick={()=>{
                 
                  sd.filter(x=>x.id===id)[0].done=false;
                setDone(!sdone)
                console.log(sd)
                }}>undone</button>)
               }
               </p>)
}
export default Note;
