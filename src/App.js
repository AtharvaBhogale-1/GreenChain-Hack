import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './templates/Work';
import Workflow from './templates/Workflow';
import Home from './templates/Home';
import Contact from './templates/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <Router >
      <Navbar className="fixed" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Contact />} />
        <Route path="/workflow/:name/:id" element={<Workflow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;