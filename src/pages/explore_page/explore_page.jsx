import LiveSearchFilter from "../../components/LiveSearchFilter";
import PaginatedArticleList from "../../components/PaginatedArticleList";
import GenreSelector from "../../components/genre-selector/genreselector";
import Nav from "../../components/nav/nav";
import "./explore_page.css";
const ExplorePage = () => {
  return (
    <div className="explore-page-main-container">
      <Nav bgColor="white" />
      <section className="main-content-section">
        <section className="content-section">
          <LiveSearchFilter />
          <PaginatedArticleList />
        </section>

        <GenreSelector />
      </section>
    </div>
  );
};

export default ExplorePage;
