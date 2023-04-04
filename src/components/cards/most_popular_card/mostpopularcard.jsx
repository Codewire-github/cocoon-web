import "./mostpopularcard.css";
import { postsData } from "../../blogpostdata";
import React from "react";

const MostPopularCard = () => {
  return (
    <div className="popular-card-container">
      <section className="content">
        <p>Most Popular</p>
        {postsData.map((data) => (
          <React.Fragment className="popular-items-container" key={data.id}>
            <PopularItem
              title={data.title}
              author={data.author}
              date={data.date}
            />
          </React.Fragment>
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
      <p className="item-no">1</p>
      <section>
        <b className="item-title">{props.title}</b>
        <section className="item-info">
          <p className="author-name">{props.author}</p>
          <p className="published-date">{props.date}</p>
        </section>
      </section>
    </div>
  );
};
