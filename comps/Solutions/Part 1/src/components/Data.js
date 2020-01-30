import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shortid from 'shortid';
// Component Imports
import InfoCard from './InfoCard';


function Data() {
    const [data, setData] = useState([]); // Setting up state to recieve data

    useEffect(() => {
        axios.get(`https://sv-reqres.now.sh/api/listings`)
            .then(e => {
                setData(e.data.data)
            })
            .catch(err => {
                return "Unable to retrieve code inside Part 1 Data Component"
            })
    }, [])

    // Display a picture, a Title, and Text. If the text outflows the box let it disappear. 
    return (
        <div className="data">
            {/* Using modulo operator I captured the remained of a repeating 6 pattern that resulted in 
                3 unique className assignments, allowing me to do a repeating pattern of six.   */}
            {data.map((value, index, key) => {
                /* Mapping through array and display infoCard */
                let remainder = (index + 1) % 6;
                let classNam = "";
                if (remainder === 1) classNam = 'topLeft';
                else if (remainder === 0) classNam = 'bottomRight'
                else classNam = 'regular';
                return (
                    <InfoCard key={shortid.generate()} classNam={classNam} data={value} />
                )
            })}
        </div>
    );
}

export default Data;