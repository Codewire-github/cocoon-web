import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <h2>The cocoon</h2>
      <ul className="nav-options-wrap">
        <li>Home</li>
        <p>/</p>
        <li>Explore</li>
        <p>/</p>
        <li>Community</li>
        <p>/</p>
        <li>About us</li>
        <button className="nav-btn">Log in</button>
      </ul>
    </div>
  );
};

export default NavBar;
