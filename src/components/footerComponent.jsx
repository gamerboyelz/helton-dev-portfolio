
import SocialMediaIcons from "./socialMediaIconsComponents";

//creating footer functional component
const Footer = () => {
    return(
      <div className="footerContainer">
        <div className="footerContainerItem1"><h1>HELTON ELLISON</h1></div>
        <div className="footerContainerItem2">
          <div>Email Address: heltonellison69@gmail.com <br /> <br /> Contact: (876) 807-7228 </div>
          <div>
          <SocialMediaIcons/>
          </div>
        </div>
      </div>
    )
  }

  export default Footer;
  
  

