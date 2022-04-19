import React from 'react'
import { NavLink, Outlet} from "react-router-dom"
import {getRestaurant1} from "../App";

function Restaurant1() {
  // let data = getRestaurant1();
  return (
    <div>
      {/* {data.map((data2) => (
        <NavLink 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/data/${data2.id}`}
          key = {data2.id}
         >
          
         </NavLink>
      ))} */}
    <Outlet />
    </div>
  )
}


export default Restaurant1;