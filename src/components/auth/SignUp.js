import React, { useState, useEffect } from "react";
import { auth } from "../../database/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../../context/authcontect";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/cocoon.png";
import sideImg from "../../images/undraw_completed_03xt.svg";

export const SignUp = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { googleSignIn, user, logOut } = UserAuth();

  const signUp = (e) => {
    //to create an account
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
      <div className="row">
        <div className="side-image">
          <Link to="/">
            <img className="logo-image" src={logo} alt="logo" />
          </Link>
          <img src={sideImg} className="side-img" />

          <div className="text">
            <h1>Join the community of writers</h1>
          </div>
        </div>

        <div className="form-container">
          <form className="signup-form" onSubmit={signUp}>
            <h2 className="heading"> Create an account</h2>
            <p className="login-prompt">Please enter your details</p>
            <div className="input-field">
              <input
                className="input-box"
                defaultValue={name}
                name="name"
                placeholder="Enter your Full Name "
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
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
                placeholder="Enter a strong Password"
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
                Sign Up
              </button>
            )}
            <hr />
            <div className="google-button">
              <button onClick={handleGoogleSignIn}>
                <img
                  src={
                    "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  }
                  className="google-logo"
                />
                Sign in with google
              </button>
            </div>
            <Link to="/login" className="link-btn">
              Already have an account? <b>Login here</b>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
