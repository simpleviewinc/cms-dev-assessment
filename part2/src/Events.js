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


class Events extends React.Component {

  render() {
    return (
      <div className="container">
      EVENTS
        <OutlinedButtons />
        {/* <CustomizedButtons />
        <ContainedButtons /> */}
        <ImgMediaCard />

      </div>
    );
  }
}

export default Events;
