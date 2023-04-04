import "./navbar.css";
import { Link } from "react-router-dom";
import NewArticlePage from "../../pages/new_article_page/newArticlepage";
const NavBar = () => {
  return (
    <div className="navbar_container" style={{ color: "white" }}>
      <Link to="/">
        <h2>The cocoon</h2>
      </Link>
      <ul className="nav-options-wrap">
        <Link to="/">
          <li>Home</li>
        </Link>
        <p>/</p>
        <li>Explore</li>
        <p>/</p>
        <li>Community</li>
        <p>/</p>
        <li>About us</li>
        <Link to="/write-new-article">
          <button className="write-btn">Write</button>
        </Link>
        <Link to="/login">
          <button className="nav-btn">Log in</button>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
