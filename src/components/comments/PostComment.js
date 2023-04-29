import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../database/firebase-config";
import { UserAuth } from "../../context/authcontect";
//import { useNavigate } from "react-router-dom";
import "./PostComment.css";
import { Link } from "react-router-dom";
const PostComment = ({ bgcolor }) => {
  const [Comment, setComment] = useState("");
  const commentsCollectionRef = collection(db, "comments");
  const { user } = UserAuth();
  //let navigate = useNavigate();

  const postComment = async (event) => {
    await event.preventDefault();
    await addDoc(commentsCollectionRef, {
      comment: Comment,
      username: user?.displayName,
      userid: user?.uid,
    });
    setComment("");
  };

  /*useEffect(() => {
        if (!isAuth) {
        navigate("/login");
      }
      }, []);
      */

  return (
    <form className="commentBox">
      <textarea
        className="postInput"
        placeholder="Add a Comment..."
        maxLength="500"
        required
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      {user?.isAnonymous || user === null ? (
        <Link to="/login">
          <button
            className="signin-btn"
            style={{
              backgroundColor: `${bgcolor === "white" ? "black" : bgcolor}`,
              color: `${
                (bgcolor === "white" || bgcolor === "rgb(82 0 255)") && "white"
              }`,
            }}
          >
            Sign in and join the discussion
          </button>
        </Link>
      ) : (
        <button
          className="postButton"
          onClick={postComment}
          style={{
            backgroundColor: `${bgcolor === "white" ? "black" : bgcolor}`,
            color: `${
              (bgcolor === "white" || bgcolor === "rgb(82 0 255)") && "white"
            }`,
          }}
        >
          Post
        </button>
      )}
    </form>
  );
};

export default PostComment;
