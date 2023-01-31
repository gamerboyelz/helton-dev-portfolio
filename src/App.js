import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import gitlab_icon from './assets/gitlab-icon.png';
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

function App() {
  return (
    <div className="App">
      <NavBar />
     
    </div>
  );
}

export default App;
