import { useEffect, useState } from "react";

import { db } from "./firebase-config";

import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

/* useEffect(() => {
      const getArticles = async () => {
        let data = await getDocs(articlesCollectionRef);
        setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getArticles();
    }, []);
  
    return articles;
  }; */

const fetchData = async () => {
  const articlesCollectionRef = collection(db, "articles");
  const querySnapshot = await getDocs(articlesCollectionRef);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
};

export let ArticlesCollection = [];

fetchData()
  .then((data) => {
    ArticlesCollection = data;
  })
  .catch((error) => {
    console.log(error);
  });
