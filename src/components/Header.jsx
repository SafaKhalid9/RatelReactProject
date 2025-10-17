import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="main-navbar">
      <div className="centered-container d-flex justify-content-between align-items-center">
        <a href="/">
          <img src="/logo1.png" alt="شعار المركز" />
        </a>

        <ul className="nav-links d-flex align-items-center mb-0">
          <li>
            <a href="#activities">الأخبار</a>
          </li>
          <li>
            <a href="#about">من نحن</a>
          </li>
          <li>
            <a href="#contact">تواصل معنا</a>
          </li>
          <li>
            <Link
              className="btn-login"
              to="/login"
              style={{ color: "#FFFFFF" }}
            >
              دخول المعلمات والإداريات
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
