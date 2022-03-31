import { Outlet, Link } from "react-router-dom";
import './App.css';

const data = [
  { 
    Hotel: "Palmshore", 
    cuisine: "Italian",  
    location: "Avadi"
  },
  {
    Hotel:"shell",
    cuisine:"Chinese",
    location: "AnnaNagar",
  },
  {
    Hotel: "The Creams",
    cuisine:"Bakery",
    location: "Ambattur",
  },
]
  
function App() {
  return (
    <div className="App">
      <h1>Zomato</h1>
      <nav
        style = {{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >        
      </nav>
      <Outlet />
      <table>
        <tr>
          <th>Hotel</th>
          <th>Cuisine</th>
          <th>Location</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td><Link to = "/restaurants">{val.Hotel}</Link></td>
              <td>{val.cuisine}</td>
              <td>{val.location}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default App;


