import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";

const Account = () => {
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
    <>
      <h1>Account</h1>
      <p>Welcome, {user?.displayName}</p>
      <button className="button" onClick={handleSignOut}>
        Log out
      </button>
    </>
  );
};

export default Account;
