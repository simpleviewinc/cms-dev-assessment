import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import InfoCard from './InfoCard';


function Data() {
    const [type, setType] = useState("listings") // Changes the data based on its state
    const [data, setData] = useState([]); // Setting up state to recieve data
    const [active, setActive] = useState('All');

    useEffect(() => {
        setData([])
        if (type == 'all') {
            const events = axios.get(`https://sv-reqres.now.sh/api/events`).then(function (response) {
                return response.data.data;
            });
            const listings = axios.get(`https://sv-reqres.now.sh/api/listings`).then(function (response) {
                return response.data.data;
            });
            const offers = axios.get(`https://sv-reqres.now.sh/api/offers`).then(function (response) {
                return response.data.data;
            });

            Promise.all([listings, events, offers]).then(eventPromises => {
                var newArray = eventPromises.flat() // Takes the multi dimentional array and flattens it all into a useable array
                setData(newArray)
            })
                .catch(err => {
                    return "Unable to retrieve code inside Part 1 Data Component"
                })
        } else {
            axios.get(`https://sv-reqres.now.sh/api/${type}`)
                .then(e => {
                    setData(e.data.data)
                })
                .catch(err => {
                    return "Unable to retrieve code inside Part 1 Data Component"
                })
        }
    }, [type])

    const loadData = (event) => {
        console.log("What is this ", event.target.value)
        switch (event.target.value) {
            case "All":
                setType("all")
                setActive("All")
                break;
            case "Listings":
                setType("listings")
                setActive("Listings")
                break;
            case "Events":
                setType("events")
                setActive("Events")
                break;
            case "Offers":
                setType("offers")
                setActive("Offers")
                break;
            default:
                console.log("Broken in loadData function")
        }
    }

    // Display a picture, a Title, and Text. If the text outflows the box let it disappear. 
    return (
        <div>
            <span className="buttons" id="current">
                <button className={active == 'All' ? 'active' : ''} onClick={loadData} value="All">All</button>
                <button className={active == 'Listings' ? 'active' : ''} onClick={loadData} value="Listings">Listings</button>
                <button className={active == "Events" ? 'active' : ''} onClick={loadData} value="Events">Events</button>
                <button className={active == "Offers" ? 'active' : ''} onClick={loadData} value="Offers">Offers</button>
            </span>
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
        </div>
    );
}

export default Data;