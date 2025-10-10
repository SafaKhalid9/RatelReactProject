
import React from "react";
import "../styles/Header.css";

export default function Header(){
  return (
    <nav className="main-navbar">
      <div className="centered-container d-flex justify-content-between align-items-center">
        <a href="/">
          <img src="/logo1.png" alt="شعار المركز" />
        </a>

        <ul className="nav-links d-flex align-items-center mb-0">
          <li><a href="#activities">الأخبار</a></li>
          <li><a href="#about">من نحن</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
          <li>
            <a className="btn-login" href="#" style={{color: "#FFFFFF"}}> دخول المعلمات ولإداريات</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
