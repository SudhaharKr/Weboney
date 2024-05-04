import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import Career from "../Pages/Career/Career";
import Contact from "../Pages/Contact/Contact";
import Branding from "../Pages/Projects/Branding";





const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<Projects/>} path="/projects"/>
        <Route element={<Branding/>} path="/branding"/>
        <Route element={<Career/>} path="/career"/>
        <Route element={<Contact/>} path="/contact"/>
        
        
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
