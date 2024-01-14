import React from "react";
import { Link } from "react-router-dom";
function Navs(){
    return(
        <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/prasad">About</Link></li>
            </ul>
        </div>
    )
}
export default Navs