import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import InfoCard from './InfoCard';


function Data() {
    const urlString = 'https://sv-reqres.now.sh/api/'

    const [data, setData] = useState([]); // Setting up state to recieve data
    const [url, setUrl] = useState(`${urlString}listings?per_page=15`) // Setting default url 

    useEffect(() => {
        axios.get(url)
            .then(e => {
                console.log('e.data', e.data.data)
                setData(e.data.data)
            })
            .catch(err => {
                return "Unable to retrieve code inside Part 1 Data Component"
            })
    }, [])

    // Display a picture, a Title, and Text. If the text outflows the box let it disappear. 
    return (
        <div className="data">
            {data.map((value, index, key) => {
                let remainder = (index + 1) % 6;
                let classNam = "";
                if (remainder === 1) classNam = 'topLeft';
                else if (remainder === 0) classNam = 'bottomRight'
                else classNam = 'regular';
                return (
                    <InfoCard classNam={classNam} key={key} data={value} />
                )
            })}
        </div>
    );
}

export default Data;