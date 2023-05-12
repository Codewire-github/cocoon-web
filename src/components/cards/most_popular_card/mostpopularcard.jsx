import "./mostpopularcard.css";
import React from "react";
import { NumtoMonth } from "../../numtomonth";
import { Link } from "react-router-dom";
const MostPopularCard = ({ sortedCollection }) => {
  const sortedArray = sortedCollection || [];
  return (
    <div className="popular-card-container">
      <section className="content">
        <p
          style={{
            textTransform: "uppercase",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Landasans",
          }}
        >
          Most Popular
        </p>
        {sortedArray.slice(0, 5).map((article, index) => (
          <div className="popular-items-container" key={article.id}>
            <PopularItem
              itemno={index + 1}
              linkid={article.id}
              title={article.title}
              author={article.authorName}
              date={`${NumtoMonth(article.published_date[1])} ${
                article.published_date[0]
              }, ${article.published_date[2]}`}
            />
          </div>
        ))}
      </section>
      <p className="styled-text">Popular</p>
    </div>
  );
};

export default MostPopularCard;

const PopularItem = (props) => {
  return (
    <div className="popular-item-container">
      <p className="item-no">{props.itemno}</p>
      <section>
        <Link to={`article/${props.linkid}`} style={{ textDecoration: "none" }}>
          <b className="item-title">{props.title}</b>
        </Link>
        <section className="item-info">
          <p className="author-name">{props.author}</p>
          <p className="published-date">{props.date}</p>
        </section>
      </section>
    </div>
  );
};
