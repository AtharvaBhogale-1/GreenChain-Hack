import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './templates/Home';
import Learn from './templates/Learn';
import Footer from "./components/Footer";
import Buyer from './templates/Buyer';
import Seller from './templates/Seller'
import PPA from './templates/Ppa';
import Listings from './templates/Listings';
import AboutPage from './templates/About';

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ppa-index" element={<PPA />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;