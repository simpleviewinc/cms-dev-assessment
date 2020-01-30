import React from 'react';
import shortid from 'shortid';
// Components Import
import Card from '../Card';
import ButtonSwitch from '../ButtonSwitch';


function StyleOne(props) {
    return (
        <div>
            <div className="stylesGlobal">
                <div className="styleOne">
                    {props.data.map((value, index, key) => {
                        let classNam = '';
                        if ((index >= 0 && index <= 4) && (index % 5 === 0 || index % 5 === 1)) {
                            classNam = "columnTypeOne";
                            return (
                                <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                            )
                        }
                    })}
                </div>
                <div className="styleOne">
                    {props.data.map((value, index, key) => {
                        let classNam = '';
                        if ((index >= 0 && index <= 4) && (index % 5 > 1)) {
                            classNam = "columnTypeTwo";
                            return (
                                <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                            )
                        }
                    })}
                </div>
            </div>
            <ButtonSwitch setStyleType={props.setStyleType} styleType={props.styleType} />
        </div>
    );
}

export default StyleOne;