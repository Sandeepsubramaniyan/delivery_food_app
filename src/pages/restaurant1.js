import React from 'react'
import { NavLink, Outlet} from "react-router-dom"
import {getRestaurant1} from "../App";

function Restaurants() {
  let data = getRestaurant1();
  return (
    <div style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {data.map((data2) => (
        <NavLink 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/data/${data2.id}`}
          key = {data2.id}
         >
          {data.Hotel}           
         </NavLink>
      ))}
    </nav>
    <Outlet />
     </div>
  )
}


export default Restaurant1;