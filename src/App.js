import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Workflow from './templates/Workflow';
import Home from './templates/Home';
import Learn from './templates/Learn';
import Footer from "./components/Footer";
import Buyer from './templates/Buyer';
import Seller from './templates/Seller'
import PPA from './templates/Ppa';
import Listings from './templates/Listings';

function App() {
  return (
    <Router >
      <Navbar className="fixed" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ppa-index" element={<PPA />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/workflow/:name/:id" element={<Workflow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;