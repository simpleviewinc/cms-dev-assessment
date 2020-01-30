import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';


function StyleThree(props) {
    return (
        <div className="stylesGlobal">
            <div className="styleOne">
                {props.data.map((value, index, key) => {
                    let classNam = 'columnTypeOne';
                    if ((index >= 10 && index <= 12) && (index === 10 || index === 11)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
            <div className="styleOne">
                {props.data.map((value, index, key) => {
                    let classNam = 'columnTypeThree';
                    if ((index >= 10 && index <= 12) && (index === 12)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default StyleThree;
