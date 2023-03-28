import "./banner-article.css";

const BannerArticle = () => {
  const imgURL =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x960/filters:focal(1076x620:1077x621):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24530056/DSCF0433.jpg";
  return (
    <div className="banner-article-wrap">
      <img src={imgURL} alt="banner-img" />
      <section className="article-info">
        <h1>Sonos Era 100 review: the new default smart speaker</h1>
        <p className="article-subheading">
          The more affordable Era speaker improves upon the Sonos One by nearly
          every measure and will likely find the same success and popularity
          among Sonos customers.
        </p>
        <span>
          <p className="author">David Pierce</p>
          <p className="date">Mar 26</p>
        </span>
      </section>
    </div>
  );
};

export default BannerArticle;
