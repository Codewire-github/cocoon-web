import "./topstoriescard.css";
import { postsData } from "../../blogpostdata";
const TopStoriesCard = () => {
  return (
    <div className="top-stories_container">
      <p className="container-title">Top stories</p>
      {postsData.map((data) => (
        <div key={data.id}>
          <TopStoriesItem
            title={data.title}
            author={data.author}
            date={data.date}
            img={data.image_Address}
          />
        </div>
      ))}
    </div>
  );
};

export default TopStoriesCard;

const TopStoriesItem = (props) => {
  const imgUrl = props.img;

  return (
    <div className="stories-item-container">
      <p className="item-no">1</p>
      <section>
        <b className="item-title">{props.title}</b>
        <section className="item-info">
          <p className="author-name">{props.author}</p>
          <p className="published-date">{props.date}</p>
        </section>
      </section>
      <img src={imgUrl} />
    </div>
  );
};
