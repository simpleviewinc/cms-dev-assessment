import React, { useState } from "react";
import fallBack from "../fallback.jpg"

function InfoCard(props) {

    const [imgLoader, setImgLoader] = useState({
        src: props.data.mediaurl,
        fallBackSrc: fallBack,
        loaded: false,
        error: false
    })

    const onImageError = () => {
        setImgLoader({ ...imgLoader, error: true })
    }

    const onImageLoaded = () => {
        setImgLoader({ ...imgLoader, loaded: true })
    }

    let srcImg = !imgLoader.error ? props.data.mediaurl : fallBack

    return (
        <div className={props.classNam}>
            <img src={srcImg} alt={props.data.title} onLoad={onImageLoaded} onError={onImageError} />
            <section className="textFade">
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>
            </section>
        </div>
    )
};

export default InfoCard;