import BannerArticle from "../../components/cards/banner_article/banner_article";
import MiniArticleCard from "../../components/cards/mini_article_card/mini_article_card";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import FooterSection from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./landing_page.css";
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing_page_container">
        <section className="first-section">
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
      <FooterSection />
    </>
  );
};

export default LandingPage;

const DisplayArticle = () => {
  return (
    <div className="article-section">
      <span className="heading-section">
        <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Recommended
        </p>
      </span>
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
      <MiniArticleCard />
    </div>
  );
};
