import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const NavBar = () => {
  return (
    <div className="container-NavBar">
      <div className="container-NavBar-icons">
        <LinkedInIcon/>
        <GitHubIcon/>
        <WhatsAppIcon/>

      </div>
      <div className="container-NavBar-Links">
        <h1>
          SUMMARY
        </h1>
        <h1>
          WORK
        </h1>
        <h1>
          SKILLS
        </h1>
        <h1>
          PROJECT
        </h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      Hello
    </div>
  );
}

export default App;
