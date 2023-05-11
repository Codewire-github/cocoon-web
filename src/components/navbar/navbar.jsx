import "./navbar.css";
import "./greetingcard.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";

import SideNavbar from "../sidenavbar/sidenav";

const NavBar = () => {
  const navigate = useNavigate();
  const { logOut, user } = UserAuth();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  const toggleSideNav = () => {
    if (showSideMenu === true) {
      setShowSideMenu(false);
    } else {
      setShowSideMenu(true);
    }
  };

  const cocoonLogo =
    "https://drive.google.com/uc?export=view&id=1QMGGSdCfpZQA1014-1yVqefSdZsRXtUn";
  return (
    <div className="navbar_container" style={{ color: "white" }}>
      <Link
        to="/"
        className="link-container"
        style={{ textDecoration: "none" }}
      >
        <img src={cocoonLogo} alt="Logo" />
        <h2 style={{ textTransform: "uppercase" }}>The cocoon</h2>
      </Link>
      <ul className="nav-options-wrap">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <p>/</p>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <li>Explore</li>
        </Link>
        <p>/</p>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <li>About us</li>
        </Link>

        {user?.isAnonymous === false && (
          <Link to="/write-new-article" style={{ textDecoration: "none" }}>
            <button className="write-btn">Write</button>
          </Link>
        )}
        {(user?.isAnonymous === true || user === null) && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="nav-btn">Log in</button>
          </Link>
        )}
        {user?.isAnonymous === false && (
          <button className="nav-btn" onClick={handleSignOut}>
            Log out
          </button>
        )}
      </ul>
      <div>
        {user?.isAnonymous === false && (
          <GreetingUser userName={user?.displayName} userImg={user?.photoURL} />
        )}
      </div>
      <span className="hamburger-menu" onClick={toggleSideNav}>
        <i
          className="fas fa-bars"
          style={{
            fontSize: "25px",
            color: "white",
            marginLeft: "-35px",
          }}
        ></i>
      </span>

      <SideNavbar toggleSidenav={toggleSideNav} isShown={showSideMenu} />
    </div>
  );
};

export default NavBar;

//Greeting user component
export const GreetingUser = (props) => {
  const Current = new Date();
  const CurrentHour = Current.getHours();
  const morningVector =
    "https://drive.google.com/uc?export=view&id=1-5_87EmrECbHCz_t0DbeG-dilu11nXaZ";
  const eveningVector =
    "https://drive.google.com/uc?export=view&id=1YHS-2hKbtNaFXDtnwtTWsvKbeqPQYzCX";
  const nightVector =
    "https://drive.google.com/uc?export=view&id=1sgBq1SRrFCZkMAzEe8s5ZfXl45yTZPrT";

  return (
    <Link to="/profile" style={{ textDecoration: "none" }}>
      <div className="greeting-container">
        {CurrentHour < 12 && (
          <img
            src={morningVector}
            className="greeting-icon"
            alt="morning-vector"
          />
        )}
        {CurrentHour >= 12 && CurrentHour <= 18 && (
          <img
            src={eveningVector}
            className="greeting-icon"
            alt="evening-vector"
          />
        )}
        {CurrentHour > 18 && (
          <img src={nightVector} className="greeting-icon" alt="night-vector" />
        )}
        <span className="greeting-content">
          <p className="greeting-text">
            {CurrentHour < 12 ? "Good morning," : "Good evening,"}
          </p>
          <p className="username">{props.userName.split(" ")[0]}</p>
        </span>
        <img src={props.userImg} className="user-photo" alt="userPhoto" />
      </div>
    </Link>
  );
};
