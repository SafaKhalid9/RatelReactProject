import userIcon from "../assets/icons/user-icon.png";
import "../styles/variables.css";
import "../styles/layoutStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <div className="user-item">
          <p className="user-name">TestUserName</p>
          <img src={userIcon} alt="ايقونة" className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
