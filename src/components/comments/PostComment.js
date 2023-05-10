import React, { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../database/firebase-config";
import { UserAuth } from "../../context/authcontect";
import { Link, useParams } from "react-router-dom";
import "./PostComment.css";

const PostComment = ({ bgcolor }) => {
  const [comment, setComment] = useState("");
  const { user } = UserAuth();
  const { id } = useParams();

  const postComment = async (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      return;
    }
    try {
      const articleRef = doc(db, `articles/${id}`);
      // Create the comments subcollection inside the article document
      const commentsCollectionRef = collection(articleRef, "comments");
      // Add a new document to the comments subcollection with the comment field
      await addDoc(commentsCollectionRef, {
        comment,
        username: user?.displayName,
        userid: user?.uid,
        userphotoURL: user?.photoURL,
        time: new Date(),
      });
      setComment("");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <form className="commentBox">
      <textarea
        className="postInput"
        placeholder="Add a Comment..."
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
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
          onClick={(event) => {
            event.preventDefault();
            if (comment.trim() === "") {
              return;
            }
            if (window.confirm("Are you sure you want to post this comment?")) {
              postComment(event);
            }
          }}
          style={{
            backgroundColor: `${bgcolor === "white" ? "black" : bgcolor}`,
            color: `${
              (bgcolor === "white" || bgcolor === "rgb(82 0 255)") && "white"
            }`,
          }}
        >
          POST
        </button>
      )}
    </form>
  );
};

export default PostComment;
