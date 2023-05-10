import { Link } from "react-router-dom";
import "./mini-article-card.css";
const MiniArticleCardFirebase = (props) => {
  return (
    <div className="mini-article-card-wrap">
      <section className="article-info">
        <span id="author-desc">
          <img src={props.authorImg} alt="authorimg" className="author-img" />
          <p id="author">{props.author}</p>
        </span>
        <Link
          to={`/article/${props.linkid}`}
          style={{ textDecoration: "none" }}
        >
          <h2 id="article-heading">{props.heading}</h2>
        </Link>
        <p id="article-subheading">{props.subheading}</p>
        <span className="article-details">
          <p id="published-date">{props.date}</p>
          <p id="readTime">{props.readTime} min read</p>
          <p id="article-genre">{props.genre}</p>
          <p
            style={{
              color: "rgb(175, 175, 175)",
            }}
          >
            <i className="fas fa-heart" style={{ marginRight: "0.3rem" }}></i>
            {props.likes}
          </p>
        </span>
      </section>
      <img src={props.imgUrl} alt="article-main-img" />
    </div>
  );
};

export default MiniArticleCardFirebase;
