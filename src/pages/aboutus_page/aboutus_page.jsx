import Nav from "../../components/nav/nav";
import "./aboutus_page.css";

const Aboutus_page = () => {
  const developersInfo = [
    {
      id: 1,
      name: "Ishan Awal",
      email_address: "ishanawal68@gmail.com",
      github_name: "Codewire-github",
      github_address: "https://github.com/Codewire-github",

      img: "https://drive.google.com/uc?export=view&id=1-R1-b1igy8GU-i3cIZD1S7rButhMkqKT ",
    },
    {
      id: 2,
      name: "Nikita Khuju",
      email_address: "nikitashrestha345@gmail.com",
      github_name: "NikitaKhuju",
      github_address: "https://github.com/NikitaKhuju",
      img: "https://drive.google.com/uc?export=view&id=1q1IolAXsXZkimCbyMEc4snsTQJo29jQb ",
    },

    {
      id: 3,
      name: "Probin Pun",
      email_address: "probinpun@gmail.com",
      github_name: "pro0o",
      github_address: "https://github.com/pro0o",
      img: "https://i.ibb.co/BL2fbFb/probin.jpg ",
    },
  ];
  return (
    <div className="the-aboutuspage">
      <Nav bgColor="white" />
      <div className="aboutus-container">
        <div className="aboutCocoon">
            <h1>About THE COCOON</h1>
            <p>Just as a caterpillar spends slumber of time 
              in its <i>cocoon</i>, ideas can lay dormant in the mind 
              until the right moment. With <i>Cocoon, 
              these ideas can take flight and spark into something 
              beautiful and powerful conversations.</i>
              
            </p> 
        </div>
        <h1>
            MEET OUR TEAM
        </h1>
        <div className="aboutus">
          {developersInfo.map((developer) => (
            <div className="aboutus-content" key={developer.id}>
              <img
                className="aboutus-image"
                src={developer.img}
                alt={developer.name}
              />
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
