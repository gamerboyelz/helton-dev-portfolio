import SocialMediaIcons from "./socialMediaIconsComponents";
import scrollToSection from "../utilities/smootheScrollUtility";

const NavBar = () => {

  const smootheScrollToSection = scrollToSection


    return (
      <div className="container-NavBar">
        <div>
        <SocialMediaIcons />
        </div>
        <div className="container-NavBar-Links">
          <div onClick={ ()=>{smootheScrollToSection('1') }}> SUMMARY </div>
          <div onClick={ ()=>{smootheScrollToSection('2')} } > WORK </div>
          <div onClick={ ()=>{smootheScrollToSection('3')}}> SKILLS </div>
          <div onClick={ ()=>{smootheScrollToSection('4')} }>PROJECT</div>
          <div>BLOG</div>
        </div>
      </div>
    );
  };

  export default NavBar;