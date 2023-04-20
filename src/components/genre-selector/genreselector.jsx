import "./genreselector.css";

const GenreSelector = () => {
  const Items = [
    "Tech",
    "TV Review",
    "Business",
    "Web Technology",
    "Entertainment",
    "Review",
    "React",
    "Flutter",
    "Python",
    "Games",
    "Social Media",
  ];
  return (
    <div className="genre-container">
      <h2>Genre</h2>
      <div className="genre-items-container">
        {Items.map((item) => (
          <GenreItem name={item} />
        ))}
      </div>
    </div>
  );
};

export default GenreSelector;

const GenreItem = (props) => {
  return <button id="genre-item">{props.name}</button>;
};
