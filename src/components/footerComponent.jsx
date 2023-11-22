import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import gitlab_icon from "../assets/gitlab-icon.png";

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

  export default Footer;
  
  

