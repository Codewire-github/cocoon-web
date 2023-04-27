import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./PaginatedArticleList.css"

const PAGE_SIZE = 10;

const PaginatedArticleList = () => {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleCollectionRef = collection(db, "articles");
      const snapshot = await getDocs(articleCollectionRef);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(data);
    };

    fetchArticles();
  }, []);
  //determine the pages to be displayed.
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleArticles = articles.slice(startIndex, endIndex);

  const handlePrevPageClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPageClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="paginatedArticleList">
      <h1>Trending Articles</h1>
      {visibleArticles.map((article) => (
        <div className="articleContainer" key={article.id}>
          <div className="articleInfo">
              <h3>{article.authorName}</h3>
              <h4>{article.published_date}</h4>
              <h5>{article.genre}</h5>
          </div>
          <h2>{article.title}</h2>
        </div>
      ))}
      <div className="pagination">
        <button
          onClick={handlePrevPageClick}
          disabled={page === 0}
        >
          Prev Page
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            disabled={index === page}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPageClick}
          disabled={page === totalPages - 1}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedArticleList;
