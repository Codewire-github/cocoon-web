import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./displayComments.css";
import { db } from "../../database/firebase-config";
import { useParams } from "react-router-dom/dist";

const DisplayComments = ({ bgcolor, user }) => {
  const [commentList, setCommentList] = useState([]);
  const { id } = useParams();

  const deleteComment = async (id) => {
    const commentsDoc = doc(db, "comments", id);
    await deleteDoc(commentsDoc);
  };
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

  return (
    <div className="comments">
      <section
        className="display-comments-heading"
        style={{
          padding: "0.7rem",
          borderBottom: `2px solid ${bgcolor === "white" ? "black" : bgcolor}`,
        }}
      >
        <h2
          style={{
            textDecoration: `underline 10px ${
              bgcolor === "white" ? "black" : bgcolor
            }`,
          }}
        >
          All comments
        </h2>
      </section>
      {commentList.map((Comment) => {
        return (
          <div
            className="commentContainer"
            key={Comment.id}
            style={{
              borderBottom: `1px solid ${
                bgcolor === "white" ? "black" : bgcolor
              }`,
            }}
          >
            <section>
              <div className="commentinfo">
                <img
                  className="userAvatar"
                  src={Comment.userphotoURL}
                  alt="User avatar"
                />
                <div className="userInfo">
                  <span className="username">{Comment.username}</span>
                  <span className="commentTime">
                    {getTimeAgo(Comment.time.toDate())}
                  </span>
                </div>
              </div>
              <div className="comment">{Comment.comment}</div>
            </section>
            {Comment.userid === user?.uid && (
              <div className="deleteButton">
                <button
                  className="delete"
                  onClick={() => {
                    deleteComment(Comment.id);
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
      {commentList.length === 0 && (
        <div className="noComments">
          <p>Be the first to leave a comment!</p>
        </div>
      )}
    </div>
  );  
};

export default DisplayComments;
