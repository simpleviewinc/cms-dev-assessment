import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import StyleOne from './layoutStlyes/StyleOne';
import StyleTwo from './layoutStlyes/StyleTwo';
import StyleThree from './layoutStlyes/StyleThree';
import StyleFour from './layoutStlyes/StyleFour';
import ButtonSwitch from './ButtonSwitch';


function DataLoader() {
    const [data, setData] = useState([]); // Setting up state to recieve data
    const [styleType, setStyleType] = useState(1);

    useEffect(() => {
        let pageArr = []
        // I am unsure if I did this as expected. I pulled in several pages and flattened, then randomized the
        // results, after grabbing multiple pages.
        pageArr[0] = axios.get(`https://sv-reqres.now.sh/api/listings/?page=1`).then(e => { return e.data.data; });
        pageArr[1] = axios.get(`https://sv-reqres.now.sh/api/listings/?page=2`).then(e => { return e.data.data; });
        pageArr[2] = axios.get(`https://sv-reqres.now.sh/api/listings/?page=3`).then(e => { return e.data.data; });
        pageArr[3] = axios.get(`https://sv-reqres.now.sh/api/listings/?page=4`).then(e => { return e.data.data; });


        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        pageArr = shuffleArray(pageArr)
        console.log(pageArr)

        Promise.all(pageArr).then(eventPromises => {
            // Takes the multi dimentional array and flattens it all into a useable array
            var newArray = eventPromises.flat()
            // Sets flattened array into data to be displayed
            setData(newArray)
        })
    }, [])

    switch (styleType) {
        case 1:
            return (
                <StyleOne data={data} setStyleType={setStyleType} styleType={styleType} />
            )
            break;
        case 2:
            return (
                <div>
                    <StyleTwo data={data} />
                    <ButtonSwitch setStyleType={setStyleType} styleType={styleType} />
                </div>)
            break;
        case 3:
            return (
                <div>
                    <StyleThree data={data} />
                    <ButtonSwitch setStyleType={setStyleType} styleType={styleType} />
                </div>);
            break;
        case 4:
            return (
                <div>
                    <StyleFour data={data} />
                    <ButtonSwitch setStyleType={setStyleType} styleType={styleType} />
                </div>);
            break;
        case 5:
            return (
                <div>
                    <StyleTwo data={data} check={0} />
                    <ButtonSwitch setStyleType={setStyleType} styleType={styleType} />
                </div>);
            break;
    }
}

export default DataLoader;