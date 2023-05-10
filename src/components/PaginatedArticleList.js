import React, { useState } from "react";

import "./PaginatedArticleList.css";
import MiniArticleCardFirebase from "./cards/mini_article_card_firebase/mini_article_card_firebase";
import { NumtoMonth } from "./numtomonth";
import { CheckCurrentYear } from "../pages/landing_page/landing_page";
const PAGE_SIZE = 10;

const PaginatedArticleList = ({ current_genre, articlesCollection }) => {
  const [page, setPage] = useState(0);
  const articles = articlesCollection || [];
  const calculateReadTime = (text) => {
    //average wpm of an individual is 100.
    const wordsPerMinute = 100;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };
  //determine the pages to be displayed.
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const selectedGenreAritcles = articles.filter(
    (article) => article.genre === current_genre
  );
  let visibleArticles;
  if (current_genre === "") {
    visibleArticles = articles.slice(startIndex, endIndex) || [];
  } else {
    visibleArticles = selectedGenreAritcles.slice(startIndex, endIndex) || [];
  }
  const handlePrevPageClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPageClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const calculateReadTime = (text) => {
    //average wpm of an individual is 100.
    const wordsPerMinute = 100;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  return (
    <div className="paginatedArticleList">
      <div>
        {visibleArticles.length === 0 ? (
          <EmptyCard message="You may want to go back and try a keyword?" />
        ) : (
          visibleArticles.map((article) => (
            <div className="articleContainer" key={article.id}>
              <MiniArticleCardFirebase
                linkid={article.id}
                author={article.authorName}
                authorImg={article.authorImgURL}
                heading={article.title}
                subheading={article.sub_description}
                imgUrl={article.img_address}
                date={`${NumtoMonth(article.published_date[1])} ${
                  article.published_date[0]
                }${CheckCurrentYear(article.published_date[2])}`}
                readTime={calculateReadTime(article.article_description)}
                genre={article.genre}
                readTime ={calculateReadTime(article.article_description)}
                likes={article.likes.length}
              />
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPageClick} disabled={page === 0}>
          <i className="fas fa-chevron-left"></i>
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
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PaginatedArticleList;

export const EmptyCard = (props) => {
  return (
    <div
      style={{
        padding: "2rem 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <i
        className="far fa-envelope-open"
        style={{ color: "grey", fontSize: "35px" }}
      ></i>
      <h1 style={{ color: "black", fontSize: "20px" }}>No Articles Found</h1>
      <p style={{ color: "grey" }}>{props.message}</p>
      <p></p>
    </div>
  );
};
