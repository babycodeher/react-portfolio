import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import Home from './components/pages/HomePage';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-center">
        <NavBar />
        <Routes basename="wumi-afolabi-portfolio">
          <Route exact path="/" element={<Home />} />
          <Route path="/wumi-afolabi-portfolio/" element={<Home />} />
          <Route path="/wumi-afolabi-portfolio/projects" element={<Projects />} />
          <Route path="/wumi-afolabi-portfolio/about" element={<About />} />
          <Route path="/wumi-afolabi-portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}