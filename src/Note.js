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

function Note ({value, id, done, paperid, del, btdone}){
   return (<p className = "newlistp" key={id}>
              <button className="dele"  onClick={()=>del(paperid,id)}/>
                     <span className={buttn(done)}>{value}</span>
                 <button className={buttn(done)} onClick={()=> {btdone(paperid,id)}}/>
               </p>)
}
export default Note;
