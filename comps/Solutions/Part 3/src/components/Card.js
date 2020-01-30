import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import fallBack from "../fallback.jpg"; // Imported image
// Component Imports

function Card(props) {
    // Holds both the url sent from data, a fallback image, and an error check to be used in determining if a fallback image is needed
    const [imgLoader, setImgLoader] = useState({
        src: props.data.mediaurl,
        fallBackSrc: fallBack,
        error: false
    })
    // If onError is triggered then this function will run and set error to true, which will in turn 
    // trigger the image assignment check.
    const onImageError = () => {
        setImgLoader({ ...imgLoader, error: true })
    }

    // Checks if the image didn't render, if didn't it places fallBack image
    let srcImg = !imgLoader.error ? props.data.mediaurl : fallBack

    return (
        <div className={props.className}>
            <div className="top-left animations">
                <p className="index">{`0${props.index + 1}.`}</p>
                <p>{props.data.title}</p>
            </div>

            <img className="animations" src={srcImg} alt={props.data.title} onError={onImageError} width={200} />
        </div>
    );
}

export default Card;