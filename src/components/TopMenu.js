import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>
            <NavLink exact to={"/"} activeClassName={"active-link"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/cavities"} activeClassName={"active-link"}>Gaatjes</NavLink>
          </li>

          <li>
            <NavLink to={"/appointments"} activeClassName={"active-link"}>Afspraak maken</NavLink>
          </li>

          <li>
            <NavLink to={"/whitening"} activeClassName={"active-link"}>Tanden bleken</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;