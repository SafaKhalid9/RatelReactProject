import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/variables.css";
import "../styles/layoutStyle.css";
import userIcon from "../assets/icons/user-icon.png";

export default function MobileSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-sidebar">
      <div className="mobile-logo">
        <img src="./logo1.png" alt="شعار" />
      </div>
      <div className="Mopile-header">
        <div className="user-item">
          <p className="user-name">TestUserName</p>
            <img src={userIcon} alt="ايقونة" className="user-icon" />            
        </div>
        <button
          id="menu-toggle"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          ☰
        </button>
    </div>
    
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">الإحصائيات</NavLink>
          </li>
          <li>
            <NavLink to="/halakat">إدارة الحلقات</NavLink>
          </li>
          <li>
            <NavLink to="/users">إدارة المستخدمين</NavLink>
          </li>
          <li>
            <NavLink to="/students">إدارة الطالبات</NavLink>
          </li>
          <li>
            <NavLink to="/paths">إدارة المسارات</NavLink>
          </li>
          <li>
            <NavLink to="/manhajs">إدارة المناهج</NavLink>
          </li>
          <li>
            <NavLink to="/attendance">تحضير المعلمات</NavLink>
          </li>
          <li>
            <NavLink to="/">الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to="/logout">تسجيل خروج</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

