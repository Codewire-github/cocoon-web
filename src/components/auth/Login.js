import React, { useState, useEffect } from "react";
//import { auth } from "./firebase";
import logo from "../../images/cocoon.png";
import { UserAuth } from "../../context/authcontect";
//import { userAuth } from "../../context/authcontect";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  //const { User, logOut } = UserAuth();
  const { googleSignIn, user, logOut } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
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
      navigate("/account");
    }
  }, [user]);

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
          <form className="login-form">
            <header className="heading">Login to your account</header>

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
                placeholder="Enter your Password here"
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
                Log in
              </button>
            )}
            <div className="google-button">
              <button onClick={handleGoogleSignIn}>Sign in with google</button>
            </div>
            <Link to="/signup" className="link-btn">
              Don't have an account? <b>Create account</b>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
