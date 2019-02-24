import React from 'react'
import {Link} from "react-router-dom";
  const Directory =()=>{

    return (
        <div className="directory-container">

             <Link to="/listings">
          <button color="primary">Part 1</button>
        </Link>
        <Link to="/filter"> <button color="warning">Part 2</button></Link>
        <Link to="/pages"> <button color="warning">Part 3</button></Link>
        <Link to="/random"> <button color="warning">Part 4</button></Link>
        </div>

    )
}
export default Directory;