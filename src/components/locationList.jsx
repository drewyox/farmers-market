import React from 'react';
import Ticket from './Location';

const masterLocations = [
  {
    date: 'January 12th, 2019',
    location: 'Downtown Seattle'
  },
  {
    date: 'March 2nd, 2019',
    location: 'Downtown Portland'
  }
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterLocations.map((farm, index) =>
        <Ticket date={farm.date}
          location={farm.location}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
