import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/HOME/Home";
import Team from "./PAGES/TEAM/Team";
import Gallery from "./PAGES/GALLERY/Gallery";
import Events from "./PAGES/EVENTS/Events";
import Contact from "./PAGES/CONTACT US/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
