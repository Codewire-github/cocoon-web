import "./genreselector.css";

const GenreSelector = (props) => {
  const Items = [
    "ChatGPT",
    "Tech",
    "TV Shows",
    "Movie Review",
    "Business",
    "Programming",
    "Politics",
    "Web Technology",
    "Entertainment",
    "Machine Learning",
    "Philosophy",
    "Culture",
    "Travel",
    "Review",
    "React",
    "Flutter",
    "Python",
    "Rust",
    "Linux",
    "Games",
    "Writing",
    "Social Media",
  ];
  return (
    <div className="genre-container">
      <h2>Genre</h2>
      <div className="genre-items-container">
        {Items.map((item) => (
          <span key={item}>
            <button
              id="genre-item"
              onClick={() => props.handleGenreOption(item)}
            >
              {item}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default GenreSelector;
