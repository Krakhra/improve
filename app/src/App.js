import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';

const App = ()=>(
  <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/" exact component = {Home}/>
      </Switch>
    </Router>
  </>
);


export default App;
