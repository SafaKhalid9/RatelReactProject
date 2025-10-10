
import React from "react";
import Header from "./components/Header";
import HomeIndex from "./pages/Home/HomeIndex";
import Footer from "./components/Footer";
import './styles/variables.css'

export default function App() {
  return (
    <>
      <Header />
      <HomeIndex />
      <Footer />
    </>
  );
}
