import React, { Component } from 'react';
import Restaurant from './Restaurant/Restaurant';

import { Consumer } from '../../context';

export default class Restaurants extends Component {
  render() {
    return (
        <Consumer>     
            {
                value => {
                    
                    const { result_list, restaurant_list, heading, payload } = value;
                    let list = payload ? result_list : restaurant_list;
                    if (list === undefined || list.length === 0) {
                        if(payload) {
                            return <h3 className="title">{heading}</h3>
                        } else {
                        return <> Loading ...</>;
                        }
                    }
                    else {
                        return (
                            <>
                                <h3 className="title">{heading}</h3>
                                {
                                    list.map( item => (
                                        <Restaurant key={item.id} restaurant ={item} />
                                    ))
                                }
                            </>
                        )
                    }
                }
            }
        </Consumer>
    )
  }
}
