import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Contact from "../Pages/Contact/Contact";
import Branding from "../Pages/Projects/Branding";
import Digital from "../Pages/Projects/Digital";
import Logo from "../Pages/Projects/Logo";
import WebsiteDevelopment from "../Pages/Projects/WebsiteDevelopment";
import LogoBrandingDesign from "../Pages/Services/LogoBrandingDesign";
import WebsiteDesign from "../Pages/Services/WebsiteDesign";
import DigitalMarketing from "../Pages/Services/DigitalMarketing";
import MobileApp from "../Pages/Services/MobileApp";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<LogoBrandingDesign />} path="/logo-branding-design" />
          <Route element={<WebsiteDesign />} path="/website-design" />
          <Route element={<DigitalMarketing />} path="/digital_marketing" />
          <Route element={<MobileApp />} path="/mobile-app-development" />
          <Route element={<Branding />} path="/branding" />
          <Route element={<Digital />} path="/digital-marketing" />
          <Route element={<Logo />} path="/logo" />
          <Route element={<WebsiteDevelopment />} path="/website-development" />
          <Route element={<Career />} path="/career" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
