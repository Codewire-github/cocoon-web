import React, { useState, useEffect } from "react";
import { auth } from "../../database/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import googlelogo from "../../images/googlelogo.png";
import cocoonLogo from "../../images/cocoonLogo.png";
import sideImg from "../../images/login_img.png";
import { UserAuth } from "../../context/authcontect";
import { useNavigate, Link } from "react-router-dom";
import "./authpage.css";
const Login = () => {
  const navigate = useNavigate();

  const { googleSignIn, user, logOut } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    //to log in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = async () => {
    //await expressions are only allowed using async functions
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="main-div">
      <div className="body">
        <Link to="/" className="Logo" style={{ textDecoration: "none" }}>
          <img src={cocoonLogo} alt="Logo" />
          <h2>THE COCOON</h2>
        </Link>
        <div className="login">
          <div className="side-image">
            <img src={sideImg} className="side-img" alt="undraw-art" />
          </div>
          <div className="form-container">
            <form className="login-form" onSubmit={logIn}>
              <h2 className="login-greeting">Welcome </h2>
              <p className="login-prompt">Please enter your details</p>
              <div className="input-field">
                <input
                  className="input-box"
                  defaultValue={email}
                  type="email"
                  placeholder="Enter your Email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <input
                  className="input-box"
                  defaultValue={password}
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              {user?.displayName ? (
                <button className="button" onClick={handleSignOut}>
                  Log out
                </button>
              ) : (
                <button className="button" type="submit">
                  Log in
                </button>
              )}
              <hr />
              <div className="google-button">
                <button onClick={handleGoogleSignIn}>
                  <img
                    src={googlelogo}
                    className="google-logo"
                    alt="google-logo"
                  />
                  Continue with google
                </button>
              </div>
              <Link to="/signup" className="link-btn">
                Don't have an account? <b>Create account</b>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
