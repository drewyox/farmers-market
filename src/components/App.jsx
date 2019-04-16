import React from 'react';
import TicketList from './locationList';
import Header from './Header';
import Image from './Image';
// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
      <Image/>
    </div>
  );
}

export default App;
