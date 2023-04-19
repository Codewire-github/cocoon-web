import "./navbar.css";
import "./greetingcard.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import morningVector from "../../images/morning.webp";
import eveningVector from "../../images/evening.webp";
import nightVector from "../../images/night.jpeg";

const NavBar = () => {
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
    <div className="navbar_container" style={{ color: "white" }}>
      <Link to="/">
        <h2>The cocoon</h2>
      </Link>
      <ul className="nav-options-wrap">
        <Link to="/">
          <li>Home</li>
        </Link>
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

export default NavBar;

export const GreetingUser = (props) => {
  const Current = new Date();
  const CurrentHour = Current.getHours();

  return (
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
        <p className="username">{props.userName}</p>
      </span>
      <img src={props.userImg} className="user-photo" alt="userPhoto" />
    </div>
  );
};
