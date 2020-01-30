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
        axios.get(`https://sv-reqres.now.sh/api/listings?per_page=20`)
            .then(e => {
                setData(e.data.data)
            })
            .catch(err => {
                return "Unable to retrieve code inside Part 3 Data Component"
            })

    }, [])
    // Using a switch statement to route between the pages 
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