import "./topstoriescard.css";
import { postsData } from "../../blogpostdata";
import { Link } from "react-router-dom";
const TopStoriesCard = () => {
  let itemNo = 0;
  return (
    <div className="top-stories_container">
      <p className="container-title">Top stories</p>
      {postsData.map((data, index) => (
        <div key={data.id}>
          <TopStoriesItem
            itemno={index + 1}
            title={data.title}
            author={data.author}
            date={data.date}
            img={data.image_Address}
            linkid={data.id}
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
      <p className="item-no">{props.itemno}</p>
      <section>
        <Link to={`/post/${props.linkid}`} style={{ textDecoration: "none" }}>
          <b className="item-title">{props.title}</b>
        </Link>
        <section className="item-info">
          <p className="author-name">{props.author}</p>
          <p className="published-date">{props.date}</p>
        </section>
      </section>
      <img src={imgUrl} alt="post-img" />
    </div>
  );
};
