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
            const result = state.restaurant_list.filter(searchingFor(action.payload));
            console.log(action.payload.length + ' payload');
            console.log(result);
            console.log(state.restaurant_list);
            const payload = action.payload.length > 0 ? true : false;
            if(result.length === 0 ) {
                return {
                    ...state,
                    result_list : result,
                    payload : payload,
                    new_heading: 'No Result found'
                }
            }  else {
                return {
                    ...state,
                    payload : payload,
                    result_list : result,
                    new_heading: 'Search result(s)'
                }
            }

        default:
            return state;
    }
};

export class Provider extends Component {
  state = {
      restaurant_list: [],
      result_list: [],
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
