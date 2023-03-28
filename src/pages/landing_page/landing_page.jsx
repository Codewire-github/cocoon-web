import BannerArticle from "../../components/cards/banner_article/banner_article";
import MiniArticleCard from "../../components/cards/mini_article_card/mini_article_card";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import NavBar from "../../components/navbar/navbar";
import "./landing_page.css";
const LandingPage = () => {
  return (
    <div className="landing_page_container">
      <section className="first-section">
        <NavBar />
        <section className="first-section-content">
          <BannerArticle />
          <TopStoriesCard />
        </section>
      </section>
      <section className="second-section">
        <DisplayArticle />
        <MostPopularCard />
      </section>
      <section className="third-section"></section>
    </div>
  );
};

export default LandingPage;

const DisplayArticle = () => {
  return (
    <div className="article-section">
      <span className="heading-section">
        <span id="circle"></span>
        <p>Trending</p>
      </span>
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
    </div>
  );
};
