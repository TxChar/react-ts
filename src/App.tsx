// src/App.tsx
// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Register from "./pages/account/Register";

function App() {

  return (
  <div className="min-h-screen">
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
