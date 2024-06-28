import "./topstoriescard.css";
import { Link } from "react-router-dom";
import { NumtoMonth } from "../../numtomonth";
import { CheckCurrentYear } from "../../../pages/landing_page/landing_page";
const TopStoriesCard = ({ sortedCollection }) => {
  const Current = new Date();

  const CurrentMonth = Current.getMonth() + 1;
  const CurrentYear = Current.getFullYear();
  const sortedArray = sortedCollection || {};
  let BannerArticle = [];

  // Loop through previous months until articles are found
  for (let i = 0; i < 24; i++) {
    const month = CurrentMonth - i;
    const year = CurrentYear;

    BannerArticle = sortedArray.filter(
      (article) =>
        article.published_date[1] === month &&
        article.published_date[2] === year
    );

    if (BannerArticle.length > 0) break;

    // Adjust month and year if necessary
    if (month <= 0) {
      const adjustedMonth = 12 + month;
      const adjustedYear = year - 1;
      BannerArticle = sortedArray.filter(
        (article) =>
          article.published_date[1] === adjustedMonth &&
          article.published_date[2] === adjustedYear
      );

      if (BannerArticle.length > 0) break;
    }
  }

  if (BannerArticle.length === 0) {
    return <div>No top stories found.</div>;
  }
  const lastIndex = BannerArticle.length > 6 ? 6 : BannerArticle.length;
  return (
    <div className="top-stories_container">
      <p className="container-title">Top stories</p>
      {BannerArticle.slice(1, lastIndex).map((article, index) => (
        <div key={article.id}>
          <TopStoriesItem
            itemno={index + 1}
            linkid={article.id}
            title={article.title}
            author={article.authorName}
            img={article.img_address}
            date={`${NumtoMonth(article.published_date[1])} ${
              article.published_date[0]
            }${CheckCurrentYear(article.published_date[2])}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TopStoriesCard;

const TopStoriesItem = (props) => {
  const imgurl = props.img;
  return (
    <div className="stories-item-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <p className="item-no">{props.itemno}</p>
        <section>
          <Link
            to={`/article/${props.linkid}`}
            style={{ textDecoration: "none" }}
          >
            <b className="item-title">{props.title}</b>
          </Link>
          <section className="item-info">
            <p className="author-name">{props.author}</p>
            <p className="published-date">{props.date}</p>
          </section>
        </section>
      </div>
      <img src={imgurl} alt="article-img" />
    </div>
  );
};
