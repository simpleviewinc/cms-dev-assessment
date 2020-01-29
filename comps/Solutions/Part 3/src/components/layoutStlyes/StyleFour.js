import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';



function StyleFour(props) {
    return (
        <div className="stylesGlobal">
            <div className="styleOne">
                {props.data.map((value, index, key) => {
                    let classNam = 'columnTypeOne';
                    if (index >= 13 && index <= 14 && (index === 13)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
            <div className="styleOne">
                {props.data.map((value, index, key) => {
                    let classNam = 'columnTypeOne';
                    if (index >= 13 && index <= 14 && (index === 14)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default StyleFour;