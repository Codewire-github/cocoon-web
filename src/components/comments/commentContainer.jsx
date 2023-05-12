import { isPlainObject } from "@tiptap/react";
import { UserAuth } from "../../context/authcontect";
import PostComment from "./PostComment";
import "./commentContainer.css";
import DisplayComments from "./displayComments";
const CommentContainer = ({ handleOpenOverlay, bgColor, isOpened, authorId}) => {
  const { user } = UserAuth();
  return (
    <div
      className="comment-main-container"
      style={{ right: isOpened ? "0%" : "-100%", opacity: isOpened ? 1 : 0.4 }}
    >
      <div
        className="comment-overlay-container"
        style={{ right: isOpened ? "0%" : "-100%" }}
      >
        <section
          className="comment-overlay-heading"
          style={{
            borderBottom: `3.5px solid ${
              bgColor === "white" ? "black" : bgColor
            }`,
          }}
        >
          <h2>Comments</h2>
          <button
            onClick={() => handleOpenOverlay(false)}
            style={{
              color: `${bgColor === "white" ? "black" : bgColor}`,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </section>
        <section className="create-comment-section">
          <PostComment bgcolor={bgColor} />
        </section>
        <section className="display-comment-section">
          <DisplayComments bgcolor={bgColor} user={user} authorId={authorId}/>
        </section>
      </div>
    </div>
  );
};

export default CommentContainer;
