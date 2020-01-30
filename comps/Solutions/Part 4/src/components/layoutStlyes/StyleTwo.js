import React from 'react';
import shortid from 'shortid';
// Components imports
import Card from '../Card';



function StyleTwo(props) {
    return (
        <div className="stylesGlobal">
            <div className="styleTwo">
                {props.data.map((value, index) => {
                    let classNam = 'columnTypeOne';
                    if (props.check === 0) {
                        if ((index >= 15 && index <= 19) && (index % 15 === 0 || index % 16 === 0)) {
                            return (
                                <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                            )
                        }
                    }
                    else if ((index >= 5 && index <= 9) && (index % 5 === 0 || index % 6 === 0)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
            <div className="styleTwo">
                {props.data.map((value, index) => {
                    let classNam = 'columnTypeOne';
                    if (props.check === 0) {
                        if ((index >= 15 && index <= 19) && (index % 17 === 0 || index % 18 === 0)) {
                            return (
                                <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                            )
                        }
                    }
                    else if ((index >= 5 && index <= 9) && (index % 7 === 0 || index % 8 === 0)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>
            <div className="styleTwo">
                {props.data.map((value, index) => {
                    let classNam = 'columnTypeThree';
                    if (props.check === 0) {
                        if ((index >= 15 && index <= 19) && (index % 19 === 0)) {
                            return (
                                <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                            )
                        }
                    }
                    else if ((index >= 5 && index <= 9) && (index % 9 === 0)) {
                        return (
                            <Card className={classNam} key={shortid.generate()} data={value} index={index} />
                        )
                    }
                })}
            </div>

        </div>
    );
}

export default StyleTwo;