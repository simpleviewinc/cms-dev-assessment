import React, {Component} from 'react';
import './all.css';
import Listing from './listing';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

class Offers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row gutter={40}>
      {this.props.listings.map(listing => 
          <Col xs={{ span: 12 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
              <Listing listing={listing} key={listing.recid}/>
          </Col>
      )}
      </Row>
    );
  }
}

export default Offers;