import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import Project_one from "./pages/Ecommerce";
import Project_two from "./pages/Project_two";
import Project_three from "./pages/Project_three";
import Project_four from "./pages/Project_four";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function onResize() {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const width = screenSize.width;

  return (
    <>
      <Router>
        <Navbar screenWidth={width} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecommerce" element={<Project_one />} />
          <Route path="/project_two" element={<Project_two />} />
          <Route path="/project_three" element={<Project_three />} />
          <Route path="/project_four" element={<Project_four />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
