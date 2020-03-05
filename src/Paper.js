import React from 'react';
import './App.css';

const paper =[
    {
        name: 'Paper N1',
        id: 1,
        notes: ['note 1 from paper 1', 'note 2 from paper 1']
    },
    {
        name: 'Paper N1',
        id: 2,
        notes: ['note 1 from paper 2', 'note 2 from paper 2']
    }
] 
function PaperList(){
    return paper.map(x=>(<p key={x.id}>{x.name},{x.id}</p>)
    )
}
function NoteList({match}){ 
    return paper[match.params.id].notes.map((x,index)=>(<p key={index}>{x}</p>)
    )  
}    

export default PaperList;
export  {NoteList};
