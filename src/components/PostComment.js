import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase";
//import { useNavigate } from "react-router-dom";
    
const PostComment= () => {
      const [comment, setComment] = useState("");
      const commentsCollectionRef = collection(db, "comments");
      //let navigate = useNavigate();
      
      const postComment = async () => {
      await addDoc(commentsCollectionRef, 
        {
          comment,
          //author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
          //navigate("/");
        };
      
      /*useEffect(() => {
        if (!isAuth) {
        navigate("/login");
      }
      }, []);
      */

        return (
            <form className="commentBox">
                <input
                    className="postInput"
                    placeholder="Add a Comment..."
                    onChange={(event) => {setComment(event.target.value);}}
                />
                <button
                    className="postButton"
                    onClick={postComment}
                >
                  Post
                </button>
            </form>
        );
};

export default PostComment;