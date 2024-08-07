import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Homepage from "./components/landing";
import Hackathon from "./components/hackathon";
import renvnza from "./components/logo/renvnza.svg";
import mulearn from "./components/logo/mulearn.svg";
import gdsc from "./components/logo/gdsc.png";
import ieee from "./components/logo/ieee.png";
import Timeline from "./components/timeline";
import Sponsorus from "./sponsorus";
import FAQ from "./components/faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/footer";
import Stackinfo from "./components/stack";
const menuItems = [
  { href: "#overview", text: "Overview" },
  { href: "#stacks", text: "Stacks we offer" },
  { href: "#", text: "Sponsors" },
  { href: "#faq", text: "FAQ" },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bgimage"> 
                <Navbar menuItems={menuItems} />
               
                <Homepage/></div>
               <section id="overview" style={{paddingTop:'70px'}}> <Hackathon /></section>
                <div className='logohead'>
                  <h1>Club Collaborators</h1>
                </div>
                <div className="logos">
                  <img src={renvnza} alt="Renvnza" />
                  <img src={mulearn} alt="Mulearn ucek" />
                  <img src={gdsc} alt="GDSC Ucek" />
                  <img src={ieee} alt="IEEE Ucek" />
                </div>
                  <Timeline />
                  <section id="stacks" style={{width:'20px',height:'20px',position:"relative",bottom:'260px'}}> </section>
                  <Stackinfo/>
                  <section id="faq" style={{width:'20px',height:'20px',position:"relative",bottom:'120px'}}> </section>
                  <FAQ/>
                 
                  <Footer/>
                
              </>
            }
          />
          <Route path="/sponsor-us" element={<Sponsorus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
