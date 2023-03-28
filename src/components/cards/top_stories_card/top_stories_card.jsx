import "./topstoriescard.css";

const TopStoriesCard = () => {
  return (
    <div className="top-stories_container">
      <p className="container-title">Top stories</p>
      <TopStoriesItem />
      <TopStoriesItem />
      <TopStoriesItem />
      <TopStoriesItem />
      <TopStoriesItem />
    </div>
  );
};

export default TopStoriesCard;

const TopStoriesItem = (props) => {
  const imgUrl =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:1440x813/256x205/filters:focal(720x407:721x408):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22701748/joy_con_01.jpeg";
  return (
    <div className="stories-item-container">
      <p className="item-no">1</p>
      <section>
        <b className="item-title">
          The Nintendo Switch OLED is on sale at woot
        </b>
        <section className="item-info">
          <p className="author-name">Ishan Awal</p>
          <p className="published-date">Mar 25</p>
        </section>
      </section>
      <img src={imgUrl} />
    </div>
  );
};
