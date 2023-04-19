import "./App.css";
import LandingPage from "./pages/landing_page/landing_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDisplayPage from "./pages/article_display_page/article_display_page";
import NewArticlePage from "./pages/new_article_page/newArticlepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Account from "./components/auth/Account";
import { AuthContextProvider } from "./context/authcontect";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/writeNewArticle" element={<NewArticlePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/post/:id" element={<ArticleDisplayPage />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
