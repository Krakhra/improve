import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Journal from './journal/Journal';

const App = ()=>(
  <div className="App">
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/journal" exact component={Journal}/>
      </Switch>
    </Router>
  </div>
);


export default App;
