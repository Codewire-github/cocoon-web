import "./mini-article-card.css";
const MiniArticleCard = () => {
  const imgUrl =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:1774x1183/480x480/filters:focal(887x592:888x593):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24539370/microsoftteamsavatars.jpg";
  return (
    <div className="mini-article-card-wrap">
      <p className="genre">Tech</p>
      <section className="article-info">
        <h2>
          Microsoft Teams now lets you transform into a 3D avatar during
          meetings
        </h2>
        <span id="author-desc">
          <p id="author">Tom warren</p>
          <p id="time">An hour ago</p>
        </span>
      </section>
      <img src={imgUrl} />
    </div>
  );
};

export default MiniArticleCard;
