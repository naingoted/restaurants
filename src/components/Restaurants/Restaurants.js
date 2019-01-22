import React, { Component } from 'react';
import Restaurant from './Restaurant/Restaurant';
import { Consumer } from '../../context';

export default class Restaurants extends Component {
  render() {
    return (
        <Consumer>
            {
                value => {
                    const { restaurant_list, heading } = value;
                    if (restaurant_list === undefined || restaurant_list.length === 0) {
                        return <> Loading ...</>;
                    } else {
                        return (
                            <>
                                <h3 className="title">{heading}</h3>
                                {
                                    restaurant_list.map( item => (
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
