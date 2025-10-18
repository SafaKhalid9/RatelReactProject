import { NavLink } from "react-router-dom";

import "../styles/variables.css";
import "../styles/layoutStyle.css"

import barChart from "../assets/icons/bar-chart.png";
import koranGreen from "../assets/icons/koran-green.png";
import users from "../assets/icons/users.png";
import teachersGreen from "../assets/icons/treachers-green.png";
import pathGreen from "../assets/icons/path-green.png";
import books from "../assets/icons/books.png";
import activitiesGreen from "../assets/icons/activities-green.png";
import home from "../assets/icons/home.png";
import logoutGreen from "../assets/icons/logout-green.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo1.png" alt="Logo" />
      </div>
      <div className="top-menu">
        <NavLink to="/" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={barChart} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">الإحصائيات</p>
        </NavLink>
        <hr />
        <NavLink to="/halakat" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={koranGreen} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">إدارة الحلقات</p>
        </NavLink>
        <hr />
        <NavLink to="/users" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={users} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">إدارة المستخدمين</p>
        </NavLink>
        <hr />
        <NavLink to="/students" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={teachersGreen} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">إدارة الطالبات</p>
        </NavLink>
        <hr />
        <NavLink to="/paths" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={pathGreen} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">إدارة المسارات</p>
        </NavLink>
        <hr />
        <NavLink to="/manhajs" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={books} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">إدارة المناهج</p>
        </NavLink>
        <hr />
        <NavLink to="/attendance" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={activitiesGreen} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">تحضير المعلمات</p>
        </NavLink>
        <hr />
      </div>

      <div className="bottom-menu">
        <NavLink to="/home" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={home} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">الرئيسية</p>
        </NavLink>
        <hr />
        <NavLink to="/logout" className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>
          <img src={logoutGreen} alt="ايقونة" className="sidebar-icon" />
          <p className="sidebar-text">تسجيل الخروج</p>
        </NavLink>
        <hr />
      </div>
    </div>
  );
}
