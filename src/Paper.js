import React from 'react';
import {Link} from 'react-router-dom';


function Paper ({name, id, amount, state, setState}){
    const dl = (hal)=>{
        fetch(`http://localhost:8000/del/${hal}`).then(setState(!state)).catch((error)=>{console.log(error)})
       }
   return (<p key={id}  ><button className="dele" onClick={()=>{dl(id)}}/> 
    <span className="paperlist"><em>Name</em>: {name}  <em>Amount</em>: {amount} <Link to={`/papers/${id}`}><button className="del" >read</button> </Link></span> 
    </p>)
}
export default Paper;
