import "./sidenav.css";

import { Link } from "react-router-dom";
import React from "react";
import { UserAuth } from "../../context/authcontect";

const SideNavbar = ({ toggleSidenav, isShown }) => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const logoURL =
    "https://drive.google.com/uc?export=view&id=1QMGGSdCfpZQA1014-1yVqefSdZsRXtUn";
  return (
    <div
      className="sidenav_container"
      style={{ right: isShown ? "4%" : "-100%" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" className="Logo" style={{ textDecoration: "none" }}>
          <img src={logoURL} alt="Logo" />
          <h2>The cocoon</h2>
        </Link>
        <button
          style={{
            color: "rgb(82 0 255)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "30px",
          }}
          onClick={toggleSidenav}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="sidenav-options-wrap">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>

        <Link to="/explore" style={{ textDecoration: "none" }}>
          <li>Explore</li>
        </Link>

        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <li>About us</li>
        </Link>

        {user?.isAnonymous === false && (
          <Link to="/write-new-article">
            <button className="write-btn">Write</button>
          </Link>
        )}
        {(user?.isAnonymous === true || user === null) && (
          <Link to="/login">
            <button className="nav-btn">Log in</button>
          </Link>
        )}
        {user?.isAnonymous === false && (
          <button className="nav-btn" onClick={handleSignOut}>
            Log out
          </button>
        )}
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      ></div>
    </div>
  );
};

export default SideNavbar;
