import React from 'react';
// import PropTypes from 'prop-types';
import image from './../assets/images/market.jpg';

function Image() {
  return(
    <div>
      <img src={require("./../assets/images/market.jpg")} alt=''></img>
    </div>
  );
}

export default Image;
