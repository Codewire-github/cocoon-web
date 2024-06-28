import "./footer.css";

const FooterSection = () => {
  const logoURL = "https://i.ibb.co/z7xYRqS/cocoon-Logo-updated.png";
  return (
    <div className="footer-container">
      <div className="theCocoon">
        <img src={logoURL} alt="Logo" />
        <h1 className="logo">The cocoon</h1>
      </div>
      <ul>
        <h2 className="Developers">Developers: </h2>
        <li id="developers-name">Ishan Awal</li>
        <li id="developers-name">Nikita Khuju</li>
        <li id="developers-name">Probin Pun</li>
      </ul>
    </div>
  );
};

export default FooterSection;
