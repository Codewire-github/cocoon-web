import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLString from "react-html-string";
import { db } from "../../database/firebase-config";
import { onSnapshot } from "firebase/firestore";
import { UserAuth } from "../../context/authcontect";
import "./article_display_page.css";
import Nav from "../../components/nav/nav";
import FooterSection from "../../components/footer/footer";
import { NumtoMonth } from "../../components/numtomonth";
import CommentContainer from "../../components/comments/commentContainer";
import GetArticleCollection from "../../database/article_collection";

import { arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";

const ArticlePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
    const PostRef = doc(db, "articles", postID.id);
    const CheckLikeStatus = onSnapshot(PostRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const previouslyLiked = data.likes?.includes(user?.uid);
        if (previouslyLiked) {
          setIsLiked(true);
        }
      }
    });
    CheckLikeStatus();
  }, []);
  const { user } = UserAuth();
  const [showCommentOverlay, setShowCommentOverlay] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [LikeNums, setLikeNums] = useState(0);
  const articlesCollection = GetArticleCollection();
  const postID = useParams();
  let CurrentArticle = [];

  if (articlesCollection !== undefined) {
    CurrentArticle = articlesCollection.find((post) => post.id === postID.id);
  }

  const {
    authorName,
    authorImgURL,
    userID,
    genre,
    bgcolor,
    title,
    sub_description,
    published_date,
    img_address,
    img_alt,
    article_description,
    likes,
  } = CurrentArticle || {};

  const [date, month, year] = published_date || [];

  useEffect(() => {
    const PostRef = doc(db, "articles", postID.id);
    const CheckLikeStatus = onSnapshot(PostRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const likesCount = data.likes?.length || 0;

        setLikeNums(likesCount);
        const previouslyLiked = data.likes?.includes(user?.uid);
        if (previouslyLiked) {
          setIsLiked(true);
        }
      }
    });
    return () => {
      CheckLikeStatus();
    };
  }, [postID.id, isLiked]);

  const handleLikeBtn = async () => {
    const PostRef = doc(db, "articles/", postID.id);

    if (isLiked) {
      await updateDoc(PostRef, {
        likes: arrayRemove(user?.uid),
      });
      setIsLiked(false);
      console.log(isLiked);
    } else {
      await updateDoc(PostRef, {
        likes: arrayUnion(user?.uid),
      });
      setIsLiked(true);
      console.log(isLiked);
    }
  };
  return (
    <div className="article-page-container">
      <section
        className="first-section"
        style={{
          backgroundColor: `${bgcolor}`,
          color: `${bgcolor === "rgb(82 0 255)" ? "white" : " black"}`,
        }}
      >
        <Nav bgColor={bgcolor} />
        <section className="first-section-content">
          <div>
            <img src={img_address} alt={img_alt} />
            <p id="image-alt">{img_alt}</p>
          </div>
          <section className="first-section-details">
            <p id="genre">{genre}</p>
            <h1 className="title">{title}</h1>
            <p className="sub-title">{sub_description}</p>
            <span className="article-details">
              <img src={authorImgURL} alt="author-img" className="author-img" />
              <span className="info">
                <span>
                  By <p id="author">{authorName}</p>
                </span>
                <p id="date">{`${NumtoMonth(month)} ${date}, ${year}`}</p>
              </span>
            </span>
          </section>
        </section>
      </section>

      <section className="second-section">
        <section className="article-description">
          <HTMLString html={article_description} />
        </section>
        <section className="interaction-section">
          <section
            style={{
              backgroundColor: "white",
              color: "black",
              minWidth: "max-content",
              padding: "0.7rem 1.8rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                color: "black",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                borderRadius: "10px",
              }}
            >
              <img
                src={authorImgURL}
                alt="author-img"
                style={{ width: "45px", height: "45px", borderRadius: "10px" }}
              />
              <span>
                <h2 style={{ fontSize: "18px" }}>Author:</h2>
                <p style={{ textTransform: "uppercase", fontSize: "13px" }}>
                  {authorName}
                </p>
              </span>
            </div>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div className="likes-wrap">
                <i
                  className="fas fa-heart"
                  style={{ color: `${isLiked ? "red" : "rgb(228, 228, 228)"}` }}
                  onClick={handleLikeBtn}
                ></i>
                <p style={{ fontWeight: "bold" }}>{LikeNums} Likes</p>
              </div>
              <span
                className="comment-overlay-btn"
                style={{
                  backgroundColor: `${bgcolor === "white" ? "black" : bgcolor}`,
                  color: `${
                    bgcolor === "rgb(82 0 255)" || bgcolor === "white"
                      ? "white"
                      : "black"
                  }`,
                  padding: "14px 17px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
                onClick={() => setShowCommentOverlay(true)}
              >
                <i
                  className="fas fa-comments"
                  style={{ marginRight: "10px" }}
                ></i>
                <b> Comments</b>
              </span>
            </section>
          </section>
        </section>
      </section>
      {showCommentOverlay && (
        <CommentContainer
          handleOpenOverlay={setShowCommentOverlay}
          bgColor={bgcolor}
        />
      )}
      <FooterSection />
    </div>
  );
};

export default ArticlePage;
