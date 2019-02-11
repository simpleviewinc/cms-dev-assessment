import React, { Component } from 'react';
import './collection.css';
import Card from '@material-ui/core/Card';

import ImgMediaCard from "../../components/ImgMediaCard";
import Bard from "../../components/Bard";
import OutlinedButtons from "../../components/Button";
import CustomizedButtons from "../../components/Btncustom";
import ContainedButtons from "../../components/Btncontained";
import axios from 'axios';

const styles = theme => ({
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
});


class Collection extends React.Component {

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

export default Collection;
