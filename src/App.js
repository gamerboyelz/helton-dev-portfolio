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
        <div>BLOG</div>
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
        </p>
        <br />
        <p>
          <b>This website was created with the REACT JavaScript FrontEnd frame work.</b> <br /> <br />
          Use the social media icons above to visit my LinkedIn profile, Git Hub and GitLab page and to contact me via WhatsApp if required. <br /><br /> Use the navigation link to the right of the social media icons to quickly navigate to the required section of the page.
        </p>
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
// working on body component here
const MainDetailList = () => {
  const detailListInfo = [
    {
      id: 1,
      heading: "Summary",
      informationA: "Something about  Summary Something about",
      informationB: "Something about  Summary"
    },
    {
      id: 2,
      heading: "Work",
      informationA: "Something about  Summary Something about",
      informationB: "Something bout Work experience"
    },
    {
      id: 3,
      heading: "Skills",
      informationA: "Something about  Summary Something about",
      informationB: "Something bout Work experience"
    },
    {
      id: 4,
      heading: "Projects",
      informationA: "Something about  Summary Something about",
      informationB: "Something bout Work experience"
    },
  ];

  return (
    <div className="MainDetailListContainerA">
      {detailListInfo.map((detailListInfoObjects) => {
        return (
          <div key={detailListInfoObjects.id} className="MainDetailListContainer">
            <div className="MainDetailListContainerElements">
              <h1 >{detailListInfoObjects.heading}</h1>
              <p >{detailListInfoObjects.informationA}</p>
              <p >{detailListInfoObjects.informationB}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

//creating footer functional component
const Footer = () => {
  return(
    <div className="footerContainer">
      <div className="footerContainerItem1"><h1>HELTON ELLISON</h1></div>
      <div className="footerContainerItem2">
        <p>Email Address: heltonellison69@gmail.com <br /> <br /> Contact: (876) 807-7228 </p>
        <div>
        <LinkedInIcon />
        <GitHubIcon />
        <WhatsAppIcon />
        <img className="gitLab" src={gitlab_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HorizontalRule />
      <MainDetailList />
      <Footer />
    </div>
  );
}

export default App;
