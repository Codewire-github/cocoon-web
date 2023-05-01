import { useEffect, useState } from "react";
import React from "react";
import { db } from "./firebase-config";
import { doc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

const GetArticleCollection = () => {
  const [articles, setArticles] = useState([]);

  const articlesCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getArticles = async () => {
      let data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);

  return articles;
};
export default GetArticleCollection;
