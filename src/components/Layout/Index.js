import React from 'react';
import Search from '../Restaurants/Search';
import Restaurants from '../Restaurants/Restaurants';
import {Provider} from '../../context';


const Index = () => {
  return (
    <Provider>
      <Search />
      <Restaurants />
    </Provider>
  );
};

export default Index;