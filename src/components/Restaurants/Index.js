import React from 'react';
import Search from './Search';
import Restaurants from './Restaurants';
import {Provider} from './context';


const Index = () => {
  return (
    <Provider>
      <Search />
      <Restaurants />
    </Provider>
  );
};

export default Index;