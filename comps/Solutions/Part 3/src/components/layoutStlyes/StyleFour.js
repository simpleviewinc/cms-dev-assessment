import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';



function StyleFour(props) {
    return (
        <div className="styleOne">
            {props.data.map((value, index, key) => {
                if (index >= 13 && index <= 14) {
                    return (
                        <Card key={shortid.generate()} data={value} index={index} />
                    )
                }
            })}
        </div>
    );
}

export default StyleFour;