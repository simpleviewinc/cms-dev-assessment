import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';


function StyleOne(props) {
    return (
        <div className="styleOne">
            {props.data.map((value, index, key) => {
                if (index >= 0 && index <= 4) {
                    return (
                        <Card key={shortid.generate()} data={value} index={index} />
                    )
                }
            })}
        </div>
    );
}

export default StyleOne;