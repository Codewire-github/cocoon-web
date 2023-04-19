import "./mini-article-card.css";
const MiniArticleCard = () => {
  const authorImg =
    "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/11/Kazuhiro_Suda2square.jpg";

  const imgUrl =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:1774x1183/480x480/filters:focal(887x592:888x593):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24539370/microsoftteamsavatars.jpg";
  return (
    <div className="mini-article-card-wrap">
      <section className="article-info">
        <span id="author-desc">
          <img src={authorImg} alt="authorimg" className="author-img" />
          <p id="author">Tom warren</p>
        </span>
        <h2 id="article-heading">
          Microsoft Teams now lets you transform into a 3D avatar during
          meetings
        </h2>
        <p id="article-subheading">
          ChatGPT recently passed the U.S. Medical Licensing Exam, but using it
          for a real-world medical diagnosis would quickly turn deadly.
        </p>
        <span className="article-details">
          <p id="published-date">May 26, 2022</p>
          <p id="article-genre">Web Technology</p>
        </span>
      </section>
      <img src={imgUrl} alt="article-photo" />
    </div>
  );
};

export default MiniArticleCard;
