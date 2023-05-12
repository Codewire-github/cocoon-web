import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./displayComments.css";
import { db } from "../../database/firebase-config";
import { useParams } from "react-router-dom/dist";

const DisplayComments = ({ bgcolor, user, authorId}) => {
  const [commentList, setCommentList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      const articleRef = doc(db, `articles/${id}`);
      const commentsCollectionRef = collection(articleRef, "comments");
      const data = await getDocs(commentsCollectionRef);
      setCommentList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getComments();
  }, []);

  const getTimeAgo = (timestamp) => {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const diff = now - timestamp;
    if (diff < ONE_DAY_MS) {
      return "Today";
    } else if (diff < 2 * ONE_DAY_MS) {
      return "Yesterday";
    } else {
      return `${Math.floor(diff / ONE_DAY_MS)} days ago`;
    }
  };

  const handleDeleteComment = async (commentId) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmation) {
      const commentRef = doc(db, `articles/${id}/comments/${commentId}`);
      try {
        await deleteDoc(commentRef);
        setCommentList(
          commentList.filter((comment) => comment.id !== commentId)
        );
      } catch (error) {
        console.error("Error removing comment: ", error);
      }
    }
  };

  return (
    <div className="comments">
      <section
        className="display-comments-heading"
        style={{
          padding: "0.5rem",
          borderBottom: `3.5px solid ${
            bgcolor === "white" ? "black" : bgcolor
          }`,
        }}
      >
        <h2>
          {commentList.length}{" "}
          {commentList.length === 1 ? "Comment" : "Comments"}
        </h2>
      </section>
      {commentList.map((comment) => {
        const commentIsAuthor = authorId === user?.uid;
        const commentIsOwner = comment.userid === user?.uid;
        return (
          <div
            className="commentContainer"
            key={comment.id}
            style={{
              borderBottom: `2.5px solid ${
                bgcolor === "white" ? "black" : bgcolor
              }`,
            }}
          >
            <div className="commentItself">
              <img src={comment.userphotoURL} alt="User avatar" />
              <div className="commentInfo">
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span className="username">{comment.username}</span>
                  <span className="commentTime">
                    {getTimeAgo(comment.time.toDate())}
                  </span>
                </span>
                <p>{comment.comment}</p>
              </div>
            </div>
            {commentIsAuthor||commentIsOwner? (
            <div className="deleteButton">
              <button
                className="delete"
                onClick={() => {
                  handleDeleteComment(comment.id, comment.userid);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ) : null}
          </div>
        );
      })}
      {commentList.length === 0 && (
        <div className="noComments">
          <p style={{ padding: "2rem 1rem" }}>
            Be the first to leave a comment!
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayComments;
