import React from 'react'
import { NavLink, Outlet} from "react-router-dom"
import {getRestaurants} from "../App";

function Restaurants() {
  let restaurants = getRestaurants();
  return (
    <div style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {restaurants.map((restaurant) => (
        <NavLink 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/restaurants/${restaurant.id}`}
          key = {restaurant.id}
         >
          {restaurant.Hotel}           
         </NavLink>
      ))}
    </nav>
    <Outlet />
     </div>
  )
}


export default Restaurants;