import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import gitlab_icon from "../assets/gitlab-icon.png";

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
          <div> <a href="#summary">SUMMARY</a> </div>
          <div> <a href="#work">WORK</a> </div>
          <div> <a href="#skills">SKILLS</a> </div>
          <div><a href="#projects">PROJECT</a></div>
          <div><a href="#blogs">BLOG</a></div>
        </div>
      </div>
    );
  };

  export default NavBar;