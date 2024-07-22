import React from "react";
import "../Main/Main.css";
import Home from "./Home/Home";
import Service from "./Service/Service";
// import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
// import Testimonial from "./Testimonial/Testimonial";
import Contanct from "./Contact/Contanct";
import About from "./About/About";
// import Template from "./Template/Template";
import Skills from "./Skills/Skills";
const Main = () => {
  return (
    <main>
     <Home/>
     <About/>
     <Service/>
     <Skills/>
     <Portfolio/>
     {/* <Experience/> */}
     {/* <Testimonial/> */}
     <Contanct/>
     {/* <Template/> */}
    </main>
  );
};

export default Main;
