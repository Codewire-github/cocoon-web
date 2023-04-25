import { UserAuth } from "../../context/authcontect";
import PostComment from "./PostComment";
import "./commentContainer.css";
import DisplayComments from "./displayComments";
const CommentContainer = ({ handleOpenOverlay, bgColor }) => {
  const { user } = UserAuth();

  return (
    <div className="comment-main-container">
      <div className="comment-overlay-container">
        <section className="comment-overlay-heading">
          <h2>Comments</h2>
          <button
            onClick={() => handleOpenOverlay(false)}
            style={{
              color: `${bgColor}`,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </section>
        <section className="create-comment-section">
          {user?.isAnonymous === false && <PostComment />}
        </section>
        <section className="display-comment-section">
          <DisplayComments />
        </section>
      </div>
    </div>
  );
};

export default CommentContainer;
