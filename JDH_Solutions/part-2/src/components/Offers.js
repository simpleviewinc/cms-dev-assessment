import React, {useState, useEffect} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

import boul from "../assets/food/boul.jpg"
import cattleack from "../assets/food/cattleack.jpg"
import henry from "../assets/food/henry.jpg"
import lock from "../assets/food/lock.jpg"
import mudhen from "../assets/food/mudhen.jpg"
import pecan from "../assets/food/pecan.jpg"
import rise from "../assets/food/rise.jpg"
import slow from "../assets/food/slow.jpg"
import vine from "../assets/food/vine.jpg"

// import placeholder from '../assets/fallback.jpg'

function Offers({offers}) {

    const [row1.jpg, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);

    const placeholders = [boul, henry, cattleack, lock, mudhen, pecan, rise, slow, vine];
    const placeholder = placeholders[Math.floor(Math.random() * 9)];

    useEffect(() => {
        template()
    }, [offers])

    let template = () => {
        if (offers.length > 0) {
            let row = []
            for (let index = 0; index < 3; index++) {
                const item = offers[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img alt={''} src={placeholder} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href="#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow1(...row1, row);
        };
        if (offers.length > 3) {
            let row = []
            for (let index = 3; index < 6; index++) {
                const item = offers[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img alt={''} src={placeholder} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href="#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow2(...row2, row);
        };
        if (offers.length > 6) {
            let row = []
            for (let index = 6; index < 9; index++) {
                const item = offers[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img alt={''} src={placeholder} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href="#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow3(...row3, row);
        };
        if (offers.length > 9) {
            let row = []
            for (let index = 9; index < 12; index++) {
                const item = offers[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img alt={''} src={placeholder} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href="#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow4(...row4, row);
        };
    }

    return (
        <Container>
            {row1.length > 0 ?
                <>
                    <Row key={"row1"}>{row1}</Row>
                    <Row key={"row2"}>{row2}</Row>
                    <Row key={"row3"}>{row3}</Row>
                    <Row key={"row4"}>{row4}</Row>
                </>
                : <div>'loading'</div>}
        </Container >
    );
}

export default Offers;