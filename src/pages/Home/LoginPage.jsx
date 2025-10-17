import React, { useState } from "react";
import "../../styles/variables.css";
import "../../styles/LoginPage.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { MenuItem, TextField } from "@mui/material";

export default function LoginPage() {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">
          تسجيل الدخول <FaLock style={{ marginRight: "8px" }} />
        </h2>

        <form className="login-form">
          {/* نوع المستخدم */}
          <div className="form-group">
            <FaUser style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--primary)",
      zIndex: 2,
    }}
  />
            <TextField
              select
              label="نوع المستخدم"
              value={userType}
              onChange={handleUserTypeChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{
                style: { right: 40, left: "auto", direction: "rtl",
                fontFamily: "Cairo, sans-serif", 
                marginRight:10,
              },
              }}
              SelectProps={{
                MenuProps: { PaperProps: { style: { direction: "rtl" } } },
                IconComponent: (props) => (
                  <span
                    {...props}
                    style={{
                      left: "8px",
                      right: "auto",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    ▼
                  </span>
                ),
              }}
              sx={{
                direction: "rtl",
                "& .MuiFormLabel-asterisk": {
                  display: "none", 
                },
                "& .MuiOutlinedInput-root": {
                  paddingRight: "35px",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  "& fieldset": { borderColor: "var(--light-brown)" },
                  "&:hover fieldset": { borderColor: "var(--secondary)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--secondary)" },
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Cairo, sans-serif",
                  color: "var(--primary)", 
                  "&.Mui-focused": {
                    color: "var(--primary)",
                    backgroundColor: "#fff",       
                    padding: "0 4px",            
                    borderRadius: "2px", 
                  },
                },
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "8px",
                },
              }}
            >
              <MenuItem value="admin">إداري</MenuItem>
              <MenuItem value="teacher">معلم</MenuItem>
            </TextField>
          </div>

          {/* البريد الإلكتروني */}
          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="البريد الإلكتروني" required />
          </div>

          {/* كلمة المرور */}
          <div className="form-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="كلمة المرور" required />
          </div>

          <div className="remember-me">
            <label>
              <input type="checkbox" /> تذكّرني
            </label>
          </div>

          <button type="submit" className="login-btn">
            تسجيل الدخول
          </button>

          <a href="#" className="forgot-password">
            نسيت كلمة المرور؟
          </a>
        </form>
      </div>
    </div>
  );
}
// TO DO : ADD THE END POINT 