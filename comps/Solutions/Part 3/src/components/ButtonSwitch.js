import React from 'react';
// Component Imports


function ButtonSwitch({ setStyleType, styleType }) {
    const goNext = () => {
        if (styleType === 5) setStyleType(1)
        else setStyleType(styleType + 1)
    }
    const goPrev = () => {
        if (styleType === 1) setStyleType(5)
        else setStyleType(styleType - 1)
    }
    return (
        <div>
            <button onClick={goPrev}>Prev</button><button onClick={goNext}>Next</button>
        </div>
    );
}

export default ButtonSwitch;