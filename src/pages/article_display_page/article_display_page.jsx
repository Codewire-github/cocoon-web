//Importing functions and components from libraries
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { postsData } from "../../components/blogpostdata";
import HTMLString from "react-html-string";
//Importing components
import Nav from "../../components/nav/nav";
import "./article_display_page.css";

import FooterSection from "../../components/footer/footer";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import DisplayComments from "../../components/comments/displayComments";

const ArticleDisplayPage = () => {
  useEffect(() => {
    console.log("hello world");
  }, []);
  window.scroll(0, 0);
  const postID = useParams();
  console.log(postID.id);
  const Article = postsData.find((post) => post.id == postID.id);
  console.log(Article);
  const {
    author,
    profession,
    genre,
    bgcolor,
    title,
    sub_title,
    date,
    image_Address,
    description,
    author_picture,
  } = Article;

  return (
    <div className="article-page-container">
      <section
        className="first-section"
        style={{
          backgroundColor: `${bgcolor}`,
          color: `${bgcolor === "rgb(82 0 255)" ? "white" : " black"}`,
        }}
      >
        <Nav />
        <section className="first-section-content">
          <div>
            <img src={image_Address} />
            <p id="image-alt">Brian Cox as Logan Roy. HBO</p>
          </div>
          <section>
            <p id="genre">{genre}</p>
            <h1 className="title">{title}</h1>
            <p className="sub-title">{sub_title}</p>
            <span className="article-details">
              <img
                src={author_picture}
                alt="author-img"
                className="author-img"
              />
              <span className="info">
                <span>
                  By <p id="author">{author}</p>
                </span>
                <p id="date">{date}</p>
              </span>
            </span>
          </section>
        </section>
      </section>

      <section className="second-section">
        <section className="article-description">
          <HTMLString html={description} />
        </section>
        <MostPopularCard />
      </section>
      <section className="comment-section">
        <DisplayComments />
      </section>
      <FooterSection />
    </div>
  );
};

export default ArticleDisplayPage;
