
import React from "react";
import "../styles/Footer.css";
import { MdPlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SiWhatsapp, SiInstagram } from "react-icons/si";



export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="footerCol1">
        <h3>موقعنا</h3>
        <p><MdPlace /> اليمن - المكلا - الديس</p>
      </div>

      <div className="footerCol2">
        <img src="/logo1.png" alt="logo" style={{ height: "180px" }} />
      </div>

      <div className="footerCol3">
        <h3>تواصل معنا عبر:</h3>
        <ul>
          <li>alquds_quran_center <SiInstagram/></li>
          <li>00967308536 <BsTelephone/></li>
          <li>00967739366786 <SiWhatsapp /></li>
          <li><a href="https://wa.me/967739366786" target="_blank" rel="noreferrer">رابط الواتساب</a></li>
        </ul>
      </div>
    </footer>
  );
}
