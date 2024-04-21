import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import gitlab_icon from "../assets/gitlab-icon.png";

const NavBar = () => {

  const handleClickVisitLinkedIn = ()=>{
      window.location.href ='https://www.linkedin.com/in/helton-ellison-81497b143'
  }
  const handleClickVisitGitHUb = ()=> {
    window.location.href = 'https://github.com/gamerboyelz'
  }

    return (
      <div className="container-NavBar">
        <div className="container-NavBar-icons">
          <LinkedInIcon onClick = {handleClickVisitLinkedIn} />
          <GitHubIcon onClick = {handleClickVisitGitHUb} />
          <WhatsAppIcon />
          <img className="gitLab" src={gitlab_icon} alt="" />
        </div>
  
        <div className="container-NavBar-Links">
          <div> SUMMARY </div>
          <div> WORK </div>
          <div> SKILLS </div>
          <div>PROJECT</div>
          <div>BLOG</div>
        </div>
      </div>
    );
  };

  export default NavBar;