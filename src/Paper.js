import React from 'react';
import {Link} from 'react-router-dom';


function Paper ({paper, list}){
    const deletePaper = (id)=>{
        fetch(`http://localhost:8000/del/${id}`).then(list()).catch((error)=>{console.log(error)})
       }
   return (<p key={paper.id}  ><button className="dele" onClick={()=>{deletePaper(paper.id)}}/> 
    <span className="paperlist"><em>Name</em>: {paper.name}  <em>Amount</em>: {paper.amount} <Link to={`/papers/${paper.id}`}><button className="del" >read</button> </Link></span> 
    </p>)
}
export default Paper;
