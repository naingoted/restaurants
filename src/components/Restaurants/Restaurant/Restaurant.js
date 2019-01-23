import React, { Component } from 'react';
// import RestaurantBtn from './RestaurantBtn/RestaurantBtn';
export default class Restaurant extends Component {
  render() {
    const {restaurant} = this.props; 
    return (
      <div className="card">       
      <div className="info">
        <div className="name">
          {restaurant.name}
        </div>
        <div className="operation_hours">
          {restaurant.operation_hours}
        </div>
      </div>
      <a href="#"> add to collections</a>
      </div>
    )
  }
}
