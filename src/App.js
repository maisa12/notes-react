import React from 'react';
import './App.css';
import Main from './Main.js';
import PaperList from './Paper.js';
import {NoteList} from './Paper.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
 return (
 
 <Router>
   <Route path="/" exact component={Main}/>
   <Route path="/paper" exact component={PaperList}/>
   <Route path="/paper/:id" exact component={NoteList}/>
 </Router>
 )
}
export default App;
