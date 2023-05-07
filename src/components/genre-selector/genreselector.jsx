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
    "Data Science",
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
              style={{
                backgroundColor: `${
                  props.current_item === item ? "#e8e8f8" : "black"
                }`,
                color: props.current_item === item ? "black" : "white",
              }}
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
