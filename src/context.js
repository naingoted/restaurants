import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_RESTAURANT_LISTS':
            return state;
        default:
            return state;
    }
};

export class Provider extends Component {
  state = {
      restaurant_list: [],
      collection_list: [],
      heading: 'List of Restaurants',
      dispatch: action => this.setState(state => reducer(state, action))
  }
  componentDidMount() {
      console.log("mounted");
    axios.get('https://restaurant-41944.firebaseio.com/restaurant.json')
        .then( res => {
            this.setState({restaurant_list : res.data})
        })
        .catch( err => console.log(err));
  }

  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
