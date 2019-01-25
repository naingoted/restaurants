import React, { Component } from 'react';
import Index from './components/Restaurants/Index';
import Collections from './components/Collections/Collections';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Switch>
          <Route path="/collections" component={Collections} />
          <Route path="/" exact component={Index} />
        </Switch>
        </div>
    );
  }
}

export default App;
