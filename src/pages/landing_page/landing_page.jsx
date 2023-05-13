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
            <TopStoriesCard sortedCollection={sortedCollection} />
          </section>
        </section>
        <section className="second-section">
          <ExploreArticles articlesCollection={articlesCollection} />
          <div className="right-container">
            <section className="quote-container">
              <h2
                style={{
                  fontFamily: "Landasans",
                  fontSize: "30px",
                  textTransform: "uppercase",
                }}
              >
                Some qoutes to motivate you
              </h2>
              <br />
              <span style={{ fontSize: "20px" }}>Louis L' Amour says,</span>
              <br />
              <b>
                Start writing, no matter what. The water does not flow until the
                faucet is turned on.
              </b>
              <br />
              <br />
              <span style={{ fontSize: "20px" }}>Charles Bukowski says,</span>
              <br />
              <b>Its a very cool thing to be a writer.</b>
              <br />
              <br />
              <span style={{ fontSize: "20px" }}>Benjamin Franklin says,</span>
              <br />
              <b>
                Either write something worth reading or do something worth
                writing.
              </b>
            </section>
            <MostPopularCard
              articlesCollection={articlesCollection}
              sortedCollection={sortedCollection}
            />
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default LandingPage;

const ExploreArticles = ({ articlesCollection }) => {
  const articles = articlesCollection;
  const calculateReadTime = (text) => {
    //average wpm of an individual is 100.
    const wordsPerMinute = 100;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };
  return (
    <>
      <div className="explore-container">
        <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Explore
        </p>
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
              }${CheckCurrentYear(article.published_date[2])}`}
              genre={article.genre}
              readTime={calculateReadTime(article.article_description)}
              likes={article.likes.length}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export const CheckCurrentYear = (year) => {
  const Current = new Date();
  const CurrentYear = Current.getFullYear();
  if (CurrentYear !== year) {
    return `, ${year}`;
  } else {
    return "";
  }
};
