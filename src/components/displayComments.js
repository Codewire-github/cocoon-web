import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./displayComments.css"
import { db } from "./firebase";

const DisplayComments = () => {
  const [commentList, setCommentList] = useState([]);
  const commentsCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setCommentList(data.docs.map((doc) => ({ ...doc.data()
        //, id: doc.id 
      })));
    };

    getComments();
  }, //[deleteComment]
  []);
  /*
  const deleteComment = async (id) => {
    const commentsDoc = doc(db, "comments", id);
    await deleteDoc(commentsDoc);
  };
  */
  return (
    <div className="comments">
      {commentList.map((Comment) => {
            console.log("comment is:", Comment.comment);
            return (
                <div className="commentContainer">
                    <div className="commentinfo">
                        <h3>patlu</h3>
                        <h4>3 days ago.</h4>
                    </div>
                    <div className="comment"> 
                        {Comment.comment} 
                    </div>
                    <div className="deleteButton">
                            <button className="delete"
                                /*
                                onClick={() => {
                                deleteComment(
                                    comment.id
                                    );
                                }}
                                */
                            >
                                Delete your comment.
                            </button>
                    </div>
                </div>
                );
                })}
    </div>
  );
}

export default DisplayComments