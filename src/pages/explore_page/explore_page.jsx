import LiveSearchFilter from "../../components/LiveSearchFilter";
import PaginatedArticleList from "../../components/PaginatedArticleList";
import GenreSelector from "../../components/genre-selector/genreselector";
import "./explore_page.css";
const ExplorePage = () => {
  return (
    <div className="explore-page-main-container">
      <section className="content-section">
        <LiveSearchFilter />
        <PaginatedArticleList />
      </section>
      <GenreSelector />
    </div>
  );
};

export default ExplorePage;
