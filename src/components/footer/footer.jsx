import "./footer.css";
import cocoonLogo from "../../images/cocoonLogo.png"

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="theCocoon">
        <img src={cocoonLogo} alt="Logo" />
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
