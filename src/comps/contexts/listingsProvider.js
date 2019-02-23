// This is a context component using react hooks,
// I have never build a project around hooks before,
// so the syntax maybe a little off.

import React, { useState } from 'react';
export const ListingsContext = React.createContext();

const ListingsProvider = (props) => {
  const listingsInformation = {
    userName: 'test name',
 
    setListings: (property, value) => {
      setListings({
        ...listingsInfo,
        [property]: value
      });
    },
    hello: ()=>{
     console.log("hello")
 }
  }
 
  // create `userInfo` with update method called `setUserInfo`
  // set default to `userInformation`
  const [listingsInfo, setListings] = useState(listingsInformation);
  return (
    <ListingsContext.Provider value={{listingsInfo}}>
      {props.children}
    </ListingsContext.Provider>
  )
}
export default ListingsProvider