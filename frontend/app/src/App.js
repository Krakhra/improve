import "./App.css";
import { useState } from "react";
import axios from "axios";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
