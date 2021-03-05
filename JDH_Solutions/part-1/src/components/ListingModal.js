import React, {useEffect, useState} from 'react'
import Modal from "react-bootstrap/Modal";
import {Container, Row, Col, Button} from "react-bootstrap";

import placeholder from '../assets/fallback.jpg'

function ListingModal(props) {
    const [state, dispatch] = useState();

    useEffect(() => {
        // let listing = state.savedListings.filter((listing) => (listing._id === props.listing._id))
        // dispatch({
        //     type: SET_CURRENT_LISTING,
        //     listing: listing[0]
        // })

    }, [props.show]);

    return (
        <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col xs={6} md={6}>
                            <strong>
                                {props.listing.title}
                            </strong>
                        </Col>
                        <Col xs={6} md={6}>

                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <img src={placeholder} alt={props.listing.title} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                                <Col xs={11} md={11}>
                                    City: {props.listing.city}, State: {props.listing.state}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={11} md={11}>
                                    <a target="_blank" href={props.listing.weburl}>Visit Listing Site</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11} md={11}>
                            {props.listing.description}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ListingModal;
