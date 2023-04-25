import { useEffect, useState } from "react";
//Importing firebase components
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase-config";

//Importing Components
import BannerArticle from "../../components/cards/banner_article/banner_article";
import MiniArticleCard from "../../components/cards/mini_article_card/mini_article_card";
import MostPopularCard from "../../components/cards/most_popular_card/mostpopularcard";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import FooterSection from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import { postsData } from "../../components/blogpostdata";
import "./landing_page.css";
import MiniArticleCardFirebase from "../../components/cards/mini_article_card_firebase/mini_article_card_firebase";
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
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");
  useEffect(() => {
    const getArticles = async () => {
      let data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(articles[1]);
    };
    getArticles();
  }, []);
  getArticleData(articles);
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

export const NumtoMonth = (value) => {
  switch (value) {
    case 1:
      return "Jan";

    case 2:
      return "Feb";

    case 3:
      return "Mar";

    case 4:
      return "Apr";

    case 5:
      return "May";

    case 6:
      return "Jun";

    case 7:
      return "Jul";

    case 8:
      return "Aug";

    case 9:
      return "Sept";

    case 10:
      return "Oct";

    case 11:
      return "Nov";

    case 12:
      return "Dec";

    default:
      break;
  }
};

export const getArticleData = (articles) => {
  return articles;
};
