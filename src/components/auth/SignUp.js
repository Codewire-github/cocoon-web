import React, { useState } from "react";
import { auth } from "../../firebase";
import logo from "../../images/cocoon.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../../context/authcontect";

import { GoogleButton } from "react-google-button";
import { Link } from "react-router-dom";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { googleSignIn, user, logOut } = UserAuth();

  const HandleRegister = (e) => {
    e.preventDefault(); //To prevent reloading of the page when submitting
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
  return (
    <div className="main-div">
      <div className="row">
        <div className="side-image">
          <img className="logo-image" src={logo} alt="logo" />

          <div className="text">
            <p>
              Join the community of <br />
              writers
            </p>
          </div>
        </div>

        <div className="form-container">
          <form className="signup-form" onSubmit={HandleRegister}>
            <header className="heading"> Sign Up</header>
            {/* <label htmlFor="name">Full name</label>
          <input
            defaultValue={name}
            name="name"
            id="name"
            placeholder="Enter your Full Name here"
            onChange={(e) => setName(e.target.value)}
            required
          ></input> */}
            <div className="input-field">
              <label htmlFor="email"> Email</label>
              <input
                className="input-box"
                defaultValue={email}
                type="email"
                placeholder="Enter your Email here"
                id="email"
                name="email"
                //onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password"> Password</label>
              <input
                className="input-box"
                defaultValue={password}
                type="password"
                placeholder="Enter a strong Password here"
                id="password"
                name="password"
                //onChange={(e) => setPassword(e.target.value)}
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
            <div className="google-button">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            <Link to="/" className="link-btn">
              Already have an account? <b>Login here</b>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
