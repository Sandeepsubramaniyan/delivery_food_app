import logo from './logo.svg';
import './App.css';

const data = [
  { resturant: "Palmshore", 
    cuisine: "italian",  
    location: "avadi"},

]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Resturant</th>
          <th>Cuisine</th>
          <th>Location</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.resturant}</td>
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


