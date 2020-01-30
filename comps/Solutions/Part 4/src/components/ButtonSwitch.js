import React from 'react';
// Component Imports


function ButtonSwitch({ setStyleType, styleType }) {
    let arrowLeft = "<-";
    let arrowRight = "->";

    const goNext = () => {
        if (styleType === 5) setStyleType(1)
        else setStyleType(styleType + 1)
    }
    const goPrev = () => {
        if (styleType === 1) setStyleType(5)
        else setStyleType(styleType - 1)
    }
    return (
        <div className="buttons">
            <span><button onClick={goPrev}><p>{arrowLeft}</p>Prev</button><button onClick={goNext}>Next<p>{arrowRight}</p></button></span>
        </div>
    );
}

export default ButtonSwitch;