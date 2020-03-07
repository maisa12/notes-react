import React from 'react';
import './App.css';
import Main from './Main.js';
import PaperList from './PaperList.js';
import NoteList from './NoteList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
 return (
  
 <Router>
   <Main/>
   <Switch>
   <Route path="/" exact component={PaperList}/>
   <Route path="/papers/:id" exact component={NoteList}/>
   </Switch>
 </Router>
 )
}
export default App;
