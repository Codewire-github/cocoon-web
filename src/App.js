import "./App.css";
import LandingPage from "./pages/landing_page/landing_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ArticleDisplayPage from "./pages/article_display_page/article_display_page";
import NewArticlePage from "./pages/new_article_page/newArticlepage";
import Login from "./components/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/write-new-article" element={<NewArticlePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
