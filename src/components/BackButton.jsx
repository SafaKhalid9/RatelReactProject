
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css"; 

const BackButton = ({ label = "رجوع" }) => {
  const navigate = useNavigate();

  return (
    <div className="form-buttons"> 
      <button className="back-button" onClick={() => navigate(-1)}>
        {label}
      </button>
    </div>
  );
};

export default BackButton;
