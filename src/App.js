import { Outlet, Link } from "react-router-dom";
import './App.css';

let restaurants = [
  {
    id:1,
    Hotel: "Palmshore", 
    cuisine: "Italian",  
    location: "Avadi",
    description: "Meat can be smoky , spicy,well-done"
  },
  {
    id :2,
    Hotel:"Seashell",
    cuisine:"Chinese",
    location: "AnnaNagar",
    description: "Taste the real Chinese"
  },
  {
    id:3,
    Hotel: "The Creams",
    cuisine:"Bakery",
    location: "Ambattur",
    description:"Breads made fresh",
  },
];

  
function App() {
  return (
    <div className="App">
      <h1>Zoggy</h1>
      <nav
        style = {{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >        
      </nav>
      <table>
        <tr>
          <th>Hotel</th>
          <th>cuisine</th>
          <th>location</th>
        </tr>
        {restaurants.map((val, key) => {
          return (
            <tr key={key}>
              <td><Link to = "/restaurants">{val.Hotel}</Link></td>
              <td>{val.cuisine}</td>
              <td>{val.location}</td>
            </tr>
          )
        })}
      </table>
      <Outlet />
    </div>
  );
}




export function getRestaurants() {
return restaurants;
}


export function getRestaurant(id) {
return restaurants.find(
  (restaurant) => restaurant.id === id
);
}

  
export default App;


