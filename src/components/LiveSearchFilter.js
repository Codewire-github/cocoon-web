import React, { useState } from "react";
import "./LiveSearchFilter.css";
import GetArticleCollection from "../database/article_collection";

const LiveSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = GetArticleCollection().filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*<Link to={`/article/${article.id}`} 
    key={article.id} 
    className="relatedArticles">{article.title}
    </Link>*/
  return (
    <form className="liveSearchFilter" style={{ zIndex: 100 }}>
      <span className="search-container">
        <i className="fas fa-search"></i>
        <input
          type="text"
          className="searchInput"
          placeholder="Search articles"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </span>
      <br></br>
      {searchTerm && (
        <div className="suggestions">
          {filteredArticles.map((article) => (
            <div className="relatedArticles" key={article.id}>
              {article.title}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default LiveSearchFilter;
