
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from  './Login page/Login';
import Aboutfront from "./Login page/Aboutfront";
import Policy  from "./Login page/Policy";
import Termsandcondition from "./Login page/Termsandcondition";
import  Home  from "./Admin/Home";
import Dashboard from "./Admin/Dashboard";
import Driver from "./Admin/Driver";
import Owner from "./Admin/Owner";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/aboutfront" element={<Aboutfront />} />
    <Route path="/policy" element={<Policy />}/>
    <Route path="/termsandcondition" element={<Termsandcondition />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/driver" element={<Driver/>}/>
    <Route path="/owner" element={<Owner/>}/>
    </Routes>
    </BrowserRouter>
      
   
  )
}

export default App;
