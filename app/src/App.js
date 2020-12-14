import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Pricing from './pricing/Pricing';

const App = ()=>(
  <div className="App">
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/pricing" exact component = {Pricing}/>
      </Switch>
    </Router>
  </div>
);


export default App;
