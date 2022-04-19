import './App.css';
import React, {Component} from 'react';
import {Link, Outlet } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.refreshList= this.refreshList.bind()
    this.state={
      data:[],
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
        .get("/displays")
        .then((res) => {  
            console.log("response",res)
            const data = res.data;
            this.setState({ data: data })
        })
        .catch((err) => {
          console.log(err)
        });
  }

  detailsList = () => {
    axios
      .get("/data")
      .then((res) => {
        console.log("response",res)
        const display_id = res.data;
        this.setState({data:display_id})
      })
      .catch((err) => {
        console.log(err)
      })
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
        <thead>
        <tr>
          <th>Hotel</th>
          <th>Cuisine</th>
          <th>Location</th>
        </tr>
        {this.state.data.map((val, key) => {
          return (
            <tr key={key}>
              <td><Link to ={`/data/${val.id}`} key={val.id} > {val.hotel}</Link></td>            
              <td>{val.cuisine}</td>
              <td>{val.location}</td>
            </tr>
          )
        })}
        </thead>
      </table>
      <Outlet />
    </div>
  );
}
}



export function getRestaurant1() {
return [];
}


export function getRestaurant(id) {
return [].find(
  (data2) => data2.id === id
);
}

  
export default App;


