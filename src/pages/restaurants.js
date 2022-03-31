import { NavLink, Outlet} from "react-router-dom"
import {getRestaurants} from "../resource";

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
          to={`/restaurants/${restaurant.number}`}
          key = {restaurant.number}
         >
          {restaurant.name}
         </NavLink>
      ))}
    </nav>
    <Outlet />
     </div>
  )
}


export default Restaurants;