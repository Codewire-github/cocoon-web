import "./articlenavbar.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { GreetingUser } from "../navbar/navbar";
const Nav = () => {
  const navigate = useNavigate();
  const { logOut, user } = UserAuth();
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

  return (
    <div className="singleblog_navbar_container">
      <h2>The cocoon</h2>
      <ul className="singleblog-nav-options-wrap">
        <li>Home</li>
        <p>/</p>
        <li>Explore</li>
        <p>/</p>
        <li>Community</li>
        <p>/</p>
        <li>About us</li>
        {user?.isAnonymous === false && (
          <Link to="/writeNewArticle">
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
