import Nav from "../../components/nav/nav";
import "./aboutus_page.css";
import nikita from "../../images/aboutusnikita.jpg";

const Aboutus_page = () => {
  return (
    <>
      <div className="the-aboutuspage">
        <Nav bgColor="white" />
        <div className="aboutus-container">
          <div className="aboutus-head">
            <h1>
              Meet our team of creators, designers <br />
              and problem solvers of The Cocoon
            </h1>
          </div>
          <div className="aboutus-des">
            <div className="aboutus-content">
              <img className="aboutus-image" src={nikita} alt="ishan" />
              <p className="aboutus-name">
                <b>Ishan Awal</b>
              </p>
              <p className="aboutus-email">ishanawal68@gmail.com</p>
            </div>
            <div className="aboutus-content">
              <img className="aboutus-image" src={nikita} alt="nikita" />
              <p className="aboutus-name">
                <b>Nikita Khuju</b>
              </p>
              <p className="aboutus-email">nikitakhuju11@gmail.com</p>
            </div>
            <div className="aboutus-content">
              <img className="aboutus-image" src={nikita} alt="probin" />
              <p className="aboutus-name">
                <b>Probin Pun</b>
              </p>
              <p className="aboutus-email">probinpun@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus_page;
