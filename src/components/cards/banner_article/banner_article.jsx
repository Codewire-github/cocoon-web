import "./banner-article.css";
import { NumtoMonth } from "../../numtomonth";
const BannerArticle = ({ sortedCollection }) => {
  const Current = new Date();

  const CurrentMonth = Current.getMonth() + 1;
  const CurrentYear = Current.getFullYear();
  const sortedArray = sortedCollection || {};
  let BannerArticle = [];
  BannerArticle = sortedArray.find(
    (article) =>
      article.published_date[1] === CurrentMonth &&
      article.published_date[2] === CurrentYear
  );

  const {
    authorName,

    title,
    sub_description,
    published_date,
    img_address,
    img_alt,
  } = BannerArticle || {};

  const [date, month, year] = published_date || [];
  return (
    <div className="banner-article-wrap">
      <img src={img_address} alt={img_alt} />
      <section className="article-info">
        <h1>{title}</h1>
        <p className="article-subheading">{sub_description}</p>
        <span>
          <p className="author">{authorName}</p>
          <p className="date">{`${NumtoMonth(month)} ${date}, ${year}`}</p>
        </span>
      </section>
    </div>
  );
};

export default BannerArticle;
