import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase-config";
import HTMLString from "react-html-string";

import "./article_display_page.css";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import Nav from "../../components/nav/nav";
import DisplayComments from "../../components/comments/displayComments";
import FooterSection from "../../components/footer/footer";
import { NumtoMonth } from "../landing_page/landing_page";
import CommentContainer from "../../components/comments/commentContainer";

const ArticlePage = () => {
  window.scroll(0, 0);
  const [showCommentOverlay, setShowCommentOverlay] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");
  const postID = useParams();
  console.log(postID.id);
  let CurrentArticle = [];

  useEffect(() => {
    const getArticles = async () => {
      let data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);

  if (articles !== undefined) {
    CurrentArticle = articles.find((post) => post.id === postID.id);
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
  console.log(title);

  const [date, month, year] = published_date || [];

  function handleLikeBtn() {
    if (isLiked === true) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }
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
            <img src={img_address} />
            <p id="image-alt">{img_alt}</p>
          </div>
          <section>
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
          <div className="likes-wrap">
            <i
              className="fas fa-heart"
              style={{ color: `${isLiked ? "red" : "grey"}` }}
              onClick={handleLikeBtn}
            ></i>
            <p>{likes} Likes</p>
          </div>
          <span
            className="comment-overlay-btn"
            style={{
              backgroundColor: `${bgcolor}`,
              color: `${bgcolor === "rgb(82 0 255)" ? "white" : "black"}`,
              padding: "14px 17px",
              borderRadius: "8px",
              fontSize: "15px",
              cursor: "pointer",
              alignSelf: "center",
            }}
            onClick={() => setShowCommentOverlay(true)}
          >
            <i className="fas fa-comments" style={{ marginRight: "10px" }}></i>
            <b> Comments</b>
          </span>
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
