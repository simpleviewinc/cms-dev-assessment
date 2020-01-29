import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';


function StyleThree(props) {
    return (
        <div className="styleOne">
            {props.data.map((value, index, key) => {
                if (index >= 10 && index <= 12) {
                    return (
                        <Card key={shortid.generate()} data={value} index={index} />
                    )
                }
            })}
        </div>
    );
}

export default StyleThree;