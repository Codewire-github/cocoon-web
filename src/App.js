import { AuthContextProvider } from "./context/authcontect";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./database/firebase-config";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/landing_page/landing_page";
import ArticleDisplayPage from "./pages/article_display_page/article_display_page";
import NewArticlePage from "./pages/new_article_page/newArticlepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Account from "./components/auth/Account";
import ArticlePage from "./pages/article_display_page_firebase/article_page";
import Profile from "./components/auth/Userprofile";
import ExplorePage from "./pages/explore_page/explore_page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/write-new-article" element={<NewArticlePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/post/:id" element={<ArticleDisplayPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
