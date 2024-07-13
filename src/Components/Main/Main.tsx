import React from "react";
import "../Main/Main.css";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
const Main = () => {
  return (
    <main>
     <Home/>
     <Service/>
     <Experience/>
     <Portfolio/>
     <Testimonial/>
    </main>
  );
};

export default Main;
