import {render} from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import './index.css';
import App from "./App";
import Restaurants from "./pages/restaurants";
import Restaurant from "./pages/restaurant";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<App />} >
      <Route path ="/Restaurants" element={<Restaurants />}>
        <Route path=":restuarantId" element={<Restaurant />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
           <p>There's nothing here!</p>
          </main>
        }
      />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

