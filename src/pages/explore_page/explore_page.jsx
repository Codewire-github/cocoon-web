import { useEffect, useState } from "react";
import LiveSearchFilter from "../../components/LiveSearchFilter";
import PaginatedArticleList from "../../components/PaginatedArticleList";
import GenreSelector from "../../components/genre-selector/genreselector";
import Nav from "../../components/nav/nav";
import "./explore_page.css";
import FooterSection from "../../components/footer/footer";
const ExplorePage = ({ articlesCollection }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  useEffect(() => {
    setSelectedGenre("");
  }, []);
  const handleGenreSelection = (value) => {
    setSelectedGenre(value);
  };
  return (
    <div className="explore-page-main-container">
      <Nav bgColor="white" />
      <section className="main-content-section">
        <section className="content-section">
          <LiveSearchFilter articlesCollection={articlesCollection} />
          <PaginatedArticleList
            current_genre={selectedGenre}
            articlesCollection={articlesCollection}
          />
        </section>

        <GenreSelector
          handleGenreOption={handleGenreSelection}
          current_item={selectedGenre}
        />
      </section>
      <FooterSection />
    </div>
  );
};

export default ExplorePage;
