import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useStoreContext} from "../../utils/GlobalState";
import {SET_CURRENT_BOOK, ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_BOOK} from "../../utils/actions";
import API from "../../utils/API"

function SavedModal(props) {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        // let book = state.savedBooks.filter((book) => (book._id === props.book._id))
        // dispatch({
        //     type: SET_CURRENT_BOOK,
        //     book: book[0]
        // })

    }, [props.show]);

    const addFavorite = () => {
        console.log(state.currentBook)
        API.saveBook(state.currentBook)
            .then(result => {
                dispatch({
                    type: ADD_FAVORITE,
                    book: state.currentBook
                });
            })
            .catch(err => console.log(err));
    }

    const removeBook = id => {
        API.deleteBook(id)
            .then(() => {
                dispatch({
                    type: REMOVE_BOOK,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    const removeFavorite = () => {
        dispatch({
            type: REMOVE_FAVORITE,
            id: state.currentBook.id
        });
    }
    return (
        <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col xs={6} md={6}>
                            <strong>
                                {props.book.title}
                            </strong>
                        </Col>
                        <Col xs={6} md={6}>
                            <Button className="btn btn-warning" style={{"width": "200px"}} onClick={() => props.remove(state.currentBook._id)}>
                                Delete Book
                            </Button>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <img src={props.book.image} alt={props.book.title} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                                <Col xs={11} md={11}>
                                    Author: {props.book.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={11} md={11}>
                                    <a target="_blank" href={props.book.link}>See Full Book <br /> on Google</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11} md={11}>
                            {props.book.description}
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

export default SavedModal;


// {state.savedBooks.indexOf(state.currentBook) !== -1 ? (
//     <Button className="btn btn-warning" style={{"width": "200px"}} onClick={() => props.remove(state.currentBook._id)}>
//         Delete Book
//     </Button>
// ) : (
//         <Button className="btn" style={{"width": "200px"}} onClick={addFavorite}>
//             <span>📚 </span> <span>This Book is Saved</span>
//         </Button>
//     )}