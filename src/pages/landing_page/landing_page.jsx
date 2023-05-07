//Importing Components
import "./landing_page.css";
import BannerArticle from "../../components/cards/banner_article/banner_article";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import FooterSection from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";

import MiniArticleCardFirebase from "../../components/cards/mini_article_card_firebase/mini_article_card_firebase";
import { NumtoMonth } from "../../components/numtomonth";
const LandingPage = ({ articlesCollection, sortedCollection }) => {
  return (
    <>
      <NavBar />
      <div className="landing_page_container">
        <section className="first-section">
          <section className="first-section-content">
            <BannerArticle sortedCollection={sortedCollection} />
            <TopStoriesCard />
          </section>
        </section>
        <section className="second-section">
          <ExploreArticles articlesCollection={articlesCollection} />
          <MostPopularCard
            articlesCollection={articlesCollection}
            sortedCollection={sortedCollection}
          />
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default LandingPage;

const ExploreArticles = ({ articlesCollection }) => {
  const articles = articlesCollection;
  return (
    <div className="explore-container">
      <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>Explore</p>
      {articles.map((article) => (
        <div key={article.id}>
          <MiniArticleCardFirebase
            linkid={article.id}
            author={article.authorName}
            authorImg={article.authorImgURL}
            heading={article.title}
            subheading={article.sub_description}
            imgUrl={article.img_address}
            date={`${NumtoMonth(article.published_date[1])} ${
              article.published_date[0]
            }, ${article.published_date[2]}`}
            genre={article.genre}
          />
        </div>
      ))}
    </div>
  );
};
