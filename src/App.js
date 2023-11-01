import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import gitlab_icon from './assets/gitlab-icon.png';
import heroImage from './assets/heroImage.png';

import "./App.styles.scss"


const NavBar = () => {
  return (
    <div className="container-NavBar">
      <div className="container-NavBar-icons">
        <LinkedInIcon/>
        <GitHubIcon/>
        <WhatsAppIcon/>
        <img className='gitLab' src={gitlab_icon} alt=""/>
      </div>

      <div className="container-NavBar-Links">
        <div>
          SUMMARY
        </div>
        <div>
          WORK
        </div>
        <div>
          SKILLS
        </div>
        <div>
          PROJECT
        </div>
      </div>
    </div>
  );
};

const HeroSection = ()=> {
  return(
    <div className="container-Hero-Section">
      <div>
        <h1>Hi, I'm Helton</h1>
        <p>A BSC. Information Communication and Technology Graduate with a Major in Software Engineer. Lets work together on your projects</p> <br />
        <p>Thid website was create with REACT.</p><br />
        <button className='btn-HeroSection'>HIRE ME</button>
      </div>
      <div><img src={heroImage} id='heroSectionImage' alt="" /></div>

    </div>
  );
}

const HorizontalRule = ()=> {
  return(
    <div className='horizontalRuleContainer'><hr className='horizontalRule'/></div>
  )
}


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <HeroSection />
      <HorizontalRule />
     
    </div>
  );
}

export default App;
