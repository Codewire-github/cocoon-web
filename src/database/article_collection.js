import { db } from "./firebase-config";

import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

/* 
  
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
