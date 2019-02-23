// This is a context component using react hooks,
// I have never build a project around hooks before,
// so the syntax maybe a little off.

import React, { useState, useEffect } from "react";
import axios from "axios";
export const ListingsContext = React.createContext();

const ListingsProvider = props => {
  useEffect(() => {
 
    axios
    .get("https://sv-reqres.now.sh/api/listings/?per_page=2")
  .then(response =>{
  listingsInformation.setListings("listings",response.data)
  })
  });
  const listingsInformation = {
    userName: "test name",
    listings:[],

    setListings: (property, value) => {
      setListings({
        ...listingsInfo,
        [property]: value
      });
    }
  };

  // create `userInfo` with update method called `setUserInfo`
  // set default to `userInformation`
  const [listingsInfo, setListings] = useState(listingsInformation);
  return (
    <ListingsContext.Provider value={{ listingsInfo }}>
      {props.children}
    </ListingsContext.Provider>
  );
};
export default ListingsProvider;
