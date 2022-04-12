import React, {Component} from 'react';
import {Link , Outlet } from "react-router-dom";
import './App.css';
import axios from 'axios';

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

class App extends Component {
  constructor(props){
    super(props);
    this.refreshList= this.refreshList.bind()
    this.state={
      display:[],
      // activeItem:{
      //   hotel:"",
      //   cuisine:"",
      //   location:"",
      //   description:""

      // },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
        .get("/display/")
        .then((res) => {
            console.log("response", res)
            this.setState({ display: res.data })
        })
        .catch((err) => {
          console.log(err)
        });
  }


  render(){
    return (
            <div className="App">
            <h1>Zoggy</h1>
            <nav
              style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
              }}
            >
              <Link to="/restaurants"><h3> HotelList</h3> </Link>
            </nav>
            <Outlet />
          </div>
        );
  }
}


  
// function App() {
//   return (
//     <div className="App">
//       <h1>Zoggy</h1>
//       <nav
//         style = {{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >        
//       </nav>
//       <table>
//         <tr>
//           <th>Hotel</th>
//           <th>cuisine</th>
//           <th>location</th>
//         </tr>
//         {restaurants.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td><Link to = "/restaurants">{val.Hotel}</Link></td>
//               <td>{val.cuisine}</td>
//               <td>{val.location}</td>
//             </tr>
//           )
//         })}
//       </table>
//       <Outlet />
//     </div>
//   );
// }




export function getRestaurants() {
return restaurants;
}


export function getRestaurant(id) {
return restaurants.find(
  (restaurant) => restaurant.id === id
);
}

  
export default App;


