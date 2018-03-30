import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
