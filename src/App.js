import { AuthContextProvider } from "./context/authcontect";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./database/firebase-config";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/landing_page/landing_page";

import NewArticlePage from "./pages/new_article_page/newArticlepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Account from "./components/auth/Account";
import ArticlePage from "./pages/article_display_page_firebase/article_page";
import Profile from "./components/auth/Userprofile";
import ExplorePage from "./pages/explore_page/explore_page";

import AboutusPage from "./pages/aboutus_page/aboutus_page";
import Aboutus_page from "./pages/aboutus_page/aboutus_page";
import WriterProfile from "./pages/profilepage/profile";

function App() {
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");
  useEffect(() => {
    const getArticles = async () => {
      let data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);
  const sortedArticlesCollection = articles.sort(
    (a, b) => b.likes.length - a.likes.length
  );
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  articlesCollection={articles}
                  sortedCollection={sortedArticlesCollection}
                />
              }
            />
            <Route
              path="/explore"
              element={<ExplorePage articlesCollection={articles} />}
            />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/write-new-article" element={<NewArticlePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/article/:id"
              element={<ArticlePage articlesCollection={articles} />}
            />
            <Route
              path="/profile"
              element={<Profile articlesCollection={articles} />}
            />
            <Route
              path="/writerprofile/:username/:uid/:imageid"
              element={<WriterProfile articlesCollection={articles} />}
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
