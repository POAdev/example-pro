import React from "react";
import {Link} from "react-router-dom";
import SiteTitle from "../SiteTitle"

function Menu() {
  return (
    <div>
       <nav className="row m-0 p-0">
          <SiteTitle/>
          <ul className="row m-auto p-0 m-0 nav">
            <li style={{listStyle: "none"}} className="mr-5 nav-item">
              <Link class="nav-Link" style={{textDecoration: "none", color: "black"}} to="/">Home</Link>
            </li>
            <li style={{listStyle: "none"}} className="mr-5 nav-item">
              <Link class="nav-Link" style={{textDecoration: "none", color: "black"}}  to="/IdeasList">IdeasList</Link>
            </li>
            <li style={{listStyle: "none"}} className="mr-5 nav-item">
              <Link class="nav-Link" style={{textDecoration: "none", color: "black"}}  to="/MetaDataCall">Some MetaDataCall</Link>
            </li>
            <li style={{listStyle: "none"}} className="mr-5 nav-item">
              <Link class="nav-Link" style={{textDecoration: "none", color: "black"}}  to="/Weather">Weather API</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
  );
}

export default Menu