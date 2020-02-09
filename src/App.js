import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import NotFound from './components/NotFound'
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User}/>
            <Route path="/contact" component={Contact}/>
            <Route default component={NotFound}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
