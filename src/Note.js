import React from 'react';

var delArr = [];
export function del(){   
    return delArr
}
function change(id){
  if(delArr.indexOf(id) ===-1) {
   return delArr.push(id)
   } 
   else{
     return delArr.splice(delArr.indexOf(id),1)
   }
}

function buttn(val){
  var cal;
   if(val){ 
     cal = "unlistbutton"
  }
  else{
     cal = "newlistbutton"
  }
  return cal  
}
function Note ({value, id, done, doneTask}){
   return (<p className = "newlistp" key={id}>
               <input type="checkbox" className="newlistbox" id={id} onChange={()=>change(id)}/>
                  <span className={buttn(done)}>{value}</span>
                 <button className={buttn(done)} onClick={()=>{doneTask(id)}}/>
               </p>)
}
export default Note;
