import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./displayComments.css";
import { db } from "../../database/firebase-config";

const DisplayComments = ({ bgcolor, user }) => {
  const [commentList, setCommentList] = useState([]);
  const commentsCollectionRef = collection(db, "comments");

  const deleteComment = async (id) => {
    const commentsDoc = doc(db, "comments", id);
    await deleteDoc(commentsDoc);
  };
  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setCommentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
  }, []);

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
                <h3>{Comment.username}</h3>
                <h4>3 days ago.</h4>
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
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayComments;
