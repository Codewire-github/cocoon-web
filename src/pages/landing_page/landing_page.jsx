//Importing article collection
import GetArticleCollection from "../../database/article_collection";
//Importing Components
import "./landing_page.css";
import BannerArticle from "../../components/cards/banner_article/banner_article";
import MiniArticleCard from "../../components/cards/mini_article_card/mini_article_card";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import FooterSection from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import { postsData } from "../../components/blogpostdata";
import MiniArticleCardFirebase from "../../components/cards/mini_article_card_firebase/mini_article_card_firebase";
import { NumtoMonth } from "../../components/numtomonth";
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

        <section className="third-section">
          <ExploreArticles />
        </section>
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
      {postsData.map((item) => (
        <div key={item.id}>
          <MiniArticleCard
            linkid={item.id}
            authorImg={item.author_picture}
            author={item.author}
            heading={item.title}
            subheading={item.sub_title}
            imgUrl={item.image_Address}
            date={item.date}
            genre={item.genre}
          />
        </div>
      ))}
    </div>
  );
};

const ExploreArticles = () => {
  const articles = GetArticleCollection();
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
