
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import About from "./About";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Jobs" element={<Jobs/>}/>
      <Route  path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
