import React from 'react';



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
function Note ({value, id, done, doneTask, ch, check}){
   return (<p className = "newlistp" key={id}>
               <input type="checkbox" className="newlistbox"  id={id} onChange={()=>check(ch)}/>
                  <span className={buttn(done)}>{value}</span>
                 <button className={buttn(done)} onClick={()=>doneTask(id)}/>
               </p>)
}
export default Note;
