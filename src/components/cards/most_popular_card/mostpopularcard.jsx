import "./mostpopularcard.css";

const MostPopularCard = () => {
  return (
    <div className="popular-card-container">
      <section className="content">
        <p>Most Popular</p>
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
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
        <b className="item-title">
          I nearly bought a Framework Laptop, but logistical realities got in
          the way
        </b>
        <section className="item-info">
          <p className="author-name">Ishan Awal</p>
          <p className="published-date">Mar 25</p>
        </section>
      </section>
    </div>
  );
};
