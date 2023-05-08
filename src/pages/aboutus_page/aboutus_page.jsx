import Nav from "../../components/nav/nav";
import "./aboutus_page.css";
import nikita from "../../images/aboutusnikita.jpg";
import pro0o from "../../images/pro0o.png"

const Aboutus_page = () => {
  const developersInfo = [
    {
      id: 1,
      name: "Ishan Awal",
      email_address: "ishanawal68@gmail.com",
      github_name: "Codewire-github",
      github_address: "https://github.com/Codewire-github",
      img:nikita,
    },
    {
      id: 2,
      name: "Nikita Khuju",
      email_address: "nikitashrestha345@gmail.com",
      github_name: "NikitaKhuju",
      github_address: "https://github.com/NikitaKhuju",
      img: nikita,
    },
    {
      id: 3,
      name: "Probin Pun",
      email_address: "probinpun@gmail.com",
      github_name: "pro0o",
      github_address: "https://github.com/pro0o",
      img: pro0o,
    },
  ];
  return (
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
          {developersInfo.map((developer) => (
            <div className="aboutus-content" key={developer.id}>
              <img className="aboutus-image" src={developer.img}/>
              <p className="aboutus-name">
                <b>{developer.name}</b>
              </p>
              <p className="aboutus-email">{developer.email_address}</p>
              <span className="aboutus-github">
                <i className="fab fa-github"></i>
                <a href={developer.github_address}>{developer.github_name}</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus_page;
