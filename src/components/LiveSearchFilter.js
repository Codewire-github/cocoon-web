import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./LiveSearchFilter.css"

const LiveSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*<Link to={`/article/${article.id}`} 
    key={article.id} 
    className="relatedArticles">{article.title}
    </Link>*/
  return (
    <form className="liveSearchFilter">
      <h1>Search Articles</h1>
      <input
        type="text"
        className="searchInput"
        placeholder="Search articles"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <br></br>
      {searchTerm && (
      <div className="suggestions">
          {filteredArticles.map((article) => (
          <div className="relatedArticles" 
          key={article.id}>{article.title}</div>
          ))}
      </div>
      )}
    </form>
  );
};

export default LiveSearchFilter;
