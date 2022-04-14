import React, {Component} from 'react';
import {Link,Outlet } from "react-router-dom";
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.refreshList= this.refreshList.bind()
    this.state={
      display:[],
      activeItem:{
        hotel:"",
        cuisine:"",
        location:"",
        description:""

      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
        .get("/display/")
        .then((res) => {
            const data = res.data
            this.setState({ display: data })
        })
        .catch((err) => {
          console.log(err)
        });
  }


  render() {
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
          <th>Cuisine</th>
          <th>Location</th>
        </tr>
        {this.state.display.map((val, key) => {
          return (
            <tr key={key}>
              <td><Link to ={`display/${val.id}`} key={val.id} > {val.hotel}</Link></td>            
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
}



export function getRestaurants() {
return [];
}


export function getRestaurant(id) {
return [].find(
  (restaurant) => restaurant.id === id
);
}

  
export default App;


