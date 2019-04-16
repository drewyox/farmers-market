import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  let locationStyle = {
    backgroundColor: '#eee',
    fontFamily: 'sans-serif',
    paddingTop: '25x'
  };
  return (
    <div style={locationStyle}>
      <h3>{props.location} - {props.date}</h3>
      <hr/>
    </div>
  );
}

Location.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Location;
