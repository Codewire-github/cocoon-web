import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const { logOut, user } = UserAuth();

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="fields">
      <p> {user?.displayName}</p>
      <img src={user?.photoURL} alt="Avatar" className="avatar" />
    </div>
  );
}
