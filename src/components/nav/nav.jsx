import "./articlenavbar.css";
import cocoonLogo from "../../images/cocoonLogo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { GreetingUser } from "../navbar/navbar";
import SideNavbar from "../sidenavbar/sidenav";
const Nav = ({ bgColor }) => {
  const { logOut, user } = UserAuth();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const toggleSideNav = () => {
    if (showSideMenu === true) {
      setShowSideMenu(false);
    } else {
      setShowSideMenu(true);
    }
  };

  return (
    <div
      className="singleblog_navbar_container"
      style={{
        color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
      }}
    >
      <Link to="/" className="Logo" style={{ textDecoration: "none" }}>
        <img src={cocoonLogo} alt="Logo" />
        <h2
          style={{
            color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
          }}
        >
          The cocoon
        </h2>
      </Link>
      <ul
        className="singleblog-nav-options-wrap"
        style={{
          color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            style={{
              color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
            }}
          >
            Home
          </li>
        </Link>
        <p>/</p>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <li
            style={{
              color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
            }}
          >
            Explore
          </li>
        </Link>
        <p>/</p>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <li
            style={{
              color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
            }}
          >
            About us
          </li>
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
      >
        {user?.isAnonymous === false && (
          <GreetingUser userName={user?.displayName} userImg={user?.photoURL} />
        )}
        <span className="hamburger-menu" onClick={() => setShowSideMenu(true)}>
          <i
            className="fas fa-bars"
            style={{
              fontSize: "26px",
              color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
            }}
          ></i>
        </span>
      </div>

      <SideNavbar toggleSidenav={toggleSideNav} isShown={showSideMenu} />
    </div>
  );
};

export default Nav;
