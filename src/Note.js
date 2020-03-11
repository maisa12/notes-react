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

function Note ({note, paperid, deleteNote, btdone}){
   return (<p className = "newlistp" key={note.id}>
              <button className="dele"  onClick={()=>deleteNote(paperid,note.id)}/>
                     <span className={buttn(note.done)}>{note.value}</span>
                 <button className={buttn(note.done)} onClick={()=> {btdone(paperid,note.id)}}/>
               </p>)
}
export default Note;
