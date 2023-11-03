import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import gitlab_icon from "./assets/gitlab-icon.png";
import heroImage from "./assets/heroImage.png";

import "./App.styles.scss";

const NavBar = () => {
  return (
    <div className="container-NavBar">
      <div className="container-NavBar-icons">
        <LinkedInIcon />
        <GitHubIcon />
        <WhatsAppIcon />
        <img className="gitLab" src={gitlab_icon} alt="" />
      </div>

      <div className="container-NavBar-Links">
        <div>SUMMARY</div>
        <div>WORK</div>
        <div>SKILLS</div>
        <div>PROJECT</div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="container-Hero-Section">
      <div>
        <h1>Hi, I'm Helton</h1>
        <p>
          A BSC. Information Communication and Technology Graduate with a Major
          in Software Engineer. Lets work together on your projects.
        </p>{" "}
        <br />
        <p>Thid website was create with REACT.</p>
        <br />
        <button className="btn-HeroSection">HIRE ME</button>
      </div>
      <div>
        <img src={heroImage} id="heroSectionImage" alt="" />
      </div>
    </div>
  );
};

const HorizontalRule = () => {
  return (
    <div className="horizontalRuleContainer">
      <hr className="horizontalRule" />
    </div>
  );
};
// here
const MainDetailList = () => {
  const detailListInfo = [
    {
      id: 1,
      heading: "Summary",
      informationA: "Something about  Summary",
      informationB: "Something about  Summary"
    },
    {
      id: 2,
      heading: "Work",
      informationA: "Something bout Work experience",
      informationB: "Something bout Work experience"
    },
    {
      id: 3,
      heading: "Skills",
      informationA: "Something bout Work experience",
      informationB: "Something bout Work experience"

    },
    {
      id: 4,
      heading: "Projects",
      informationA: "Something bout Work experience",
      informationB: "Something bout Work experience"

    },
  ];

  return (
    <div>
      {detailListInfo.map((detailListInfoObjects) => {
        return (
          <div>
            <h1>{detailListInfoObjects.heading}</h1>
            <p>{detailListInfoObjects.informationA}</p>
            <p>{detailListInfoObjects.informationB}</p>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HorizontalRule />
      <MainDetailList />
    </div>
  );
}

export default App;
