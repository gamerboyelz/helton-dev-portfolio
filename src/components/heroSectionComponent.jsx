import heroImage from "../assets/heroImage.png";
import resume from "../assets/CV.pdf";
import FormPopUpModal from "./formPopUpModal";

const HeroSection = () => {


    return (
      <div className="container-Hero-Section">
        <div>
          <h1 className="centerHeadingElement">Hi, I'm Helton</h1>
          <p>
            A BSC. Information Communication and Technology Graduate with a Major
            in Software Engineer. <br />
            Lets work together on your projects.
          </p>
          <br />
          <p>
            <b>This website was created with the REACT JavaScript FrontEnd frame work.</b> <br /> <br />
        
          </p>
          <br />

          <div className="buttonContainer">
            {/* work on Hire Me button below */}
            <FormPopUpModal/>
          <a className="btn-HeroSection" href={resume} download="Helton's Resume">Download CV</a> 
          </div>

        </div>
        <div>
          <img src={heroImage} id="heroSectionImage" alt="" />
        </div>
      </div>
    );
  };

  export default HeroSection;