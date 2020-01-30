import React, { useState } from "react";
import fallBack from "../fallback.jpg"

function InfoCard(props) {
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
        <div className={props.classNam}>
            <img src={srcImg} alt={props.data.title} onError={onImageError} />
            <section className="textFade">
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>
            </section>
        </div>
    )
};

export default InfoCard;