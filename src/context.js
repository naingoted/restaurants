import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

function searchingFor(term) {
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_RESTAURANTS':
            state.search_list = state.restaurant_list;
            const result = state.search_list.filter(searchingFor(action.payload));
            if(result.length === 0 ) {
                return {
                    ...state,
                    restaurant_list : state.restaurant_list,
                    heading: 'No Result found'
                }
            }  else {
                return {
                    ...state,
                    restaurant_list : result,
                    heading: 'Search result(s)'
                }
            }

        default:
            return state;
    }
};

export class Provider extends Component {
  state = {
      restaurant_list: [],
      collection_list: [],
      search_list: [],
      heading: 'List of Restaurants',
      dispatch: action => this.setState(state => reducer(state, action))
  }
  componentDidMount() {
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
