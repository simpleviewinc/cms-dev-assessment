import React, {useState, useEffect} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

import placeholder from '../assets/fallback.jpg'

function Listings({listings}) {

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);

    useEffect(() => {
        template()
    }, [listings])

    let template = () => {
        if (listings.length > 0) {
            let row = []
            for (let index = 0; index < 3; index++) {
                const item = listings[index];
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
        if (listings.length > 3) {
            let row = []
            for (let index = 3; index < 6; index++) {
                const item = listings[index];
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
        if (listings.length > 6) {
            let row = []
            for (let index = 6; index < 9; index++) {
                const item = listings[index];
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
        if (listings.length > 9) {
            let row = []
            for (let index = 9; index < 12; index++) {
                const item = listings[index];
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

export default Listings;