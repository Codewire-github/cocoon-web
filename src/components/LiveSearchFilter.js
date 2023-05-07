import React, { useState } from "react";
import "./LiveSearchFilter.css";
import GetArticleCollection, {
  ArticlesCollection,
} from "../database/article_collection";
import { Link } from "react-router-dom";

const LiveSearchFilter = ({ articlesCollection }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const articles = articlesCollection || [];
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*<Link to={`/article/${article.id}`} 
    key={article.id} 
    className="relatedArticles">{article.title}
    </Link>*/
  return (
    <form className="liveSearchFilter">
      <div className="search-container">
        <i className="fas fa-search"></i>
        <input
          type="text"
          className="searchInput"
          placeholder="Search articles"
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
        />
      </div>
      {searchTerm && (
        <div className="suggestions">
          {filteredArticles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              className="relatedArticles"
              key={article.id}
            >
              {article.title}
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};

export default LiveSearchFilter;
