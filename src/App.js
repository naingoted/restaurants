import React, { Component } from 'react';
import Restaurants from './components/Restaurants/Restaurants';
import Collections from './components/Collections/Collections';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
        <Switch>
          <Route path="/collections" component={Collections} />
          <Route path="/" exact component={Restaurants} />
        </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
