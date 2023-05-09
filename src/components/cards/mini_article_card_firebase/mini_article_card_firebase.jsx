import { Link } from "react-router-dom";
import "./mini-article-card.css";
const MiniArticleCardFirebase = (props) => {
  const authorImg =
    "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/11/Kazuhiro_Suda2square.jpg";

  const imgUrl =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:1774x1183/480x480/filters:focal(887x592:888x593):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24539370/microsoftteamsavatars.jpg";
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
      <img src={props.imgUrl} alt="article-photo" />
    </div>
  );
};

export default MiniArticleCardFirebase;
