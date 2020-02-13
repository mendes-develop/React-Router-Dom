import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

class App extends React.Component {
  render(){
    return (

      <Router>
        <Nav/>

        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

        </div>


      </Router>

      

    );
  }
  
}

export default App;
