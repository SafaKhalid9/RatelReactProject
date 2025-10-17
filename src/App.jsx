
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeIndex from "./pages/Home/HomeIndex";
import LoginPage from "./pages/Home/LoginPage"; 
import Footer from "./components/Footer";
import './styles/variables.css'

export default function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
