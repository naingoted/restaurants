import React, { Component } from 'react';
import Index from './components/Layout/Index';
import Collections from './components/Collections/Collections';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import {Provider} from './context';

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
