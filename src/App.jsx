import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [btnType, setBtnType] = useState("");
  function handleMouseOver(e) {
    setBtnType(e.target.id);
  }
  function handleMouseOut() {
    setBtnType("");
  }
  return (
    <Router>
      <Navbar
        btnID={btnType}
        mouseOut={handleMouseOut}
        mouseOver={handleMouseOver}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer
        btnID={btnType}
        mouseOut={handleMouseOut}
        mouseOver={handleMouseOver}
      />
    </Router>
  );
}

export default App;
