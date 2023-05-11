import React, { useState, useEffect } from "react";
import { auth } from "../../database/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../../context/authcontect";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
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
  const googleLogoURL =
    "https://drive.google.com/uc?export=view&id=1PzRik3VLJ6f_XJhYsLWxJC4psQGbj3df";
  const logoURL =
    "https://drive.google.com/uc?export=view&id=1QMGGSdCfpZQA1014-1yVqefSdZsRXtUn";
  const sideImgURL =
    "https://drive.google.com/uc?export=view&id=1n__aWHgq5TeQVqO0jyTAXaITZgHNHxzw";

  return (
    <div className="main-div">
      <div className="body">
        <Link to="/" className="Logo" style={{ textDecoration: "none" }}>
          <img src={logoURL} alt="Logo" />
          <h2>THE COCOON</h2>
        </Link>
        <div className="login">
          <div className="side-image">
            <img src={sideImgURL} className="side-img" alt="side-img" />
          </div>
          <div className="form-container">
            <form className="signup-form">
              <h2
                className="heading"
                style={{
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                Create an account
              </h2>
              {/* <p className="login-prompt">Please enter your details</p>
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
              )} */}

              <hr />
              <div className="google-button">
                <button onClick={handleGoogleSignIn}>
                  <img
                    src={googleLogoURL}
                    className="google-logo"
                    alt="google-logo"
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
    </div>
  );
};

export default SignUp;
