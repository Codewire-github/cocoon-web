import "./navbar.css";
import "./greetingcard.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import morningVector from "../../images/morning.webp";
import eveningVector from "../../images/evening.webp";
import nightVector from "../../images/night.jpeg";
import cocoonLogo from "../../images/cocoonLogo.png"

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
      <Link to="/" className="link-container" style={{ textDecoration: "none" }}>
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
    </div>
  );
};

export default NavBar;

//Greeting user component
export const GreetingUser = (props) => {
  const Current = new Date();
  const CurrentHour = Current.getHours();

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
          <p className="username">{props.userName}</p>
        </span>
        <img src={props.userImg} className="user-photo" alt="userPhoto" />
      </div>
    </Link>
  );
};
