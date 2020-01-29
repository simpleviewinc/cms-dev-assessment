import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import InfoCard from './InfoCard';


function Data() {
    // Changes the data being called based on its state
    const [type, setType] = useState("all")
    // Setting up state to recieve data
    const [data, setData] = useState([]);
    // Used to trigger active style for the purple box
    const [active, setActive] = useState('All');

    useEffect(() => {
        // Added a clear all of data state because of a bug that was letting the state stack up.
        setData([])
        // Checks if the data you want to see is 'all', if it is it calls all three and saves them to variables
        if (type == 'all') {
            const events = axios.get(`https://sv-reqres.now.sh/api/events`).then(e => { return e.data.data; });
            const listings = axios.get(`https://sv-reqres.now.sh/api/listings`).then(e => { return e.data.data; });
            const offers = axios.get(`https://sv-reqres.now.sh/api/offers`).then(e => { return e.data.data; });

            // Resolves all three promises
            Promise.all([listings, events, offers]).then(eventPromises => {
                // Takes the multi dimentional array and flattens it all into a useable array
                var newArray = eventPromises.flat()
                // Sets flattened array into data to be displayed
                setData(newArray)
            })
                .catch(err => {
                    return "Unable to retrieve code inside Part 1 Data Component";
                })
        } else {
            // If anything but 'all' the type is fed into the axios call and sets data into the correct section
            axios.get(`https://sv-reqres.now.sh/api/${type}`)
                .then(e => {
                    setData(e.data.data)
                })
                .catch(err => {
                    return "Unable to retrieve code inside Part 2 Data Component"
                })
        }
    }, [type])

    // Created an onClick function that takes the value of the clicked button and sets type of call and which will be active
    const loadData = (event) => {
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
                console.log("Error in loadData function")
        }
    }

    return (
        <div>
            <span className="buttons">
                {/* Settled with hard coding all four buttons and attaching the required event handlers  */}
                <button className={active == 'All' ? 'active' : ''} onClick={loadData} value="All">All</button>
                <button className={active == 'Listings' ? 'active' : ''} onClick={loadData} value="Listings">Listings</button>
                <button className={active == "Events" ? 'active' : ''} onClick={loadData} value="Events">Events</button>
                <button className={active == "Offers" ? 'active' : ''} onClick={loadData} value="Offers">Offers</button>
            </span>
            <div className="data">
                {/* Using modulo operator I captured the remained of a repeating 6 pattern that resulted in 
                3 unique className assignments, allowing me to do a repeating pattern of six.   */}
                {data.map((value, index, key) => {
                    {/* Mapping through array and display infoCard */ }
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