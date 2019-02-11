import React, { Component } from 'react';

import ImgMediaCard from "./ImgMediaCard.js";
import OutlinedButtons from "./OutlinedButtons.js";

const styles = theme => ({
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
});


class Offers extends React.Component {

  render() {
    return (
      <div className="container">
        <OutlinedButtons />
        {/* <CustomizedButtons />
        <ContainedButtons /> */}
        <ImgMediaCard />

      </div>
    );
  }
}

export default Offers;
