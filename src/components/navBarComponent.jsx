
import SocialMediaIcons from "./socialMediaIconsComponents";

const NavBar = () => {


    return (
      <div className="container-NavBar">
        <div>
        <SocialMediaIcons />

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