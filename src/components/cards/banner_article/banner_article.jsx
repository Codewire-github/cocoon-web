import "./banner-article.css";

const BannerArticle = () => {
  const imgURL =
    "https://duet-cdn.vox-cdn.com/thumbor/308x0:3554x2223/1200x960/filters:focal(1880x391:1881x392):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24590250/52822653443_0601982e08_o.jpg";
  return (
    <div className="banner-article-wrap">
      <img src={imgURL} alt="banner-img" />
      <section className="article-info">
        <h1>
          SpaceX Starship launch countdown: all of the news on its first test
          flight
        </h1>
        <p className="article-subheading">
          SpaceX backed off of its first attempt at launching a Starship
          prototype to orbital velocity, but it is scheduled to try again
          Thursday morning.
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
