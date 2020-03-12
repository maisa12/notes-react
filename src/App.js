import React, {useState} from 'react';
import './App.css';
import PaperList from './components/PaperList';
import NoteList from './components/NoteList';

function App() {
  const [paperlist, setPaperlist]=useState(true);
  const state = () =>setPaperlist(!paperlist);
  const [paperid, setId]=useState(true);
  const Paperid = (pap) =>setId(pap);
 return (<div>
 <h1><i className="fa fa-list-ul"></i><em>  Online</em> Notepad</h1>
 {paperlist?(<PaperList state={state}  paperid={Paperid}/>):(<NoteList id={paperid} state={state}/>)}
  </div>
 )
}
export default App