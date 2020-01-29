import React from 'react';
import shortid from 'shortid';
// Components imports
import Card from '../Card';



function StyleTwo(props) {
    return (
        <div className="styleOne">
            {props.data.map((value, index, key) => {
                if (props.check == 0) {
                    if (index >= 15 && index <= 19) {
                        return (
                            <Card key={shortid.generate()} data={value} index={index} />
                        )
                    }
                } else if (index >= 5 && index <= 9) {
                    return (
                        <Card key={shortid.generate()} data={value} index={index} />
                    )
                }
            })}
        </div>
    );
}

export default StyleTwo;