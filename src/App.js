
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Jobsdetails from "./components/Jobsdetails";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Jobs" element={<Jobs/>}/>
      <Route  path="/About" element={<About/>}/>
      <Route  path="/Jobsdetails/:id" element={<Jobsdetails/>}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
