import React from 'react'
import App from "./App";
import {render} from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import './index.css';
import Restaurant from "./pages/restaurant";
import Restaurant1 from "./pages/restaurant1";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<App />} >
      <Route path ="/data" element={<Restaurant1 />}>
        <Route path =":data2Id" element={<Restaurant />} />
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

