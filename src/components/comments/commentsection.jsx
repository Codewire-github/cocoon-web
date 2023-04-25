import PostComment from "./PostComment";
import DisplayComments from "./displayComments";

const CommentSection = () => {
  return (
    <div className="comment-section-container">
      <PostComment />
      <DisplayComments />
    </div>
  );
};

export default CommentSection;
