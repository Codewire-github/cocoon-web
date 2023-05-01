import "./articlenavbar.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { GreetingUser } from "../navbar/navbar";
const Nav = ({ bgColor }) => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="singleblog_navbar_container"
      style={{
        color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
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
        <li
          style={{
            color: `${bgColor === "rgb(82 0 255)" ? "white" : "black"}`,
          }}
        >
          About us
        </li>
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
      <div>
        {user?.isAnonymous === false && (
          <GreetingUser userName={user?.displayName} userImg={user?.photoURL} />
        )}
      </div>
    </div>
  );
};

export default Nav;
