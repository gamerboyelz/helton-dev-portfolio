import heroImage from "../assets/heroImage.png";
import resume from "../assets/CV.pdf";

const HeroSection = () => {

  const handleClickPopUpForm = ()=>{
    console.log("hire button was clicked")
  }

    return (
      <div className="container-Hero-Section">
        <div>
          <h1 className="centerHeadingElement">Hi, I'm Helton</h1>
          <p>
            A BSC. Information Communication and Technology Graduate with a Major
            in Software Engineer. Lets work together on your projects.
          </p>
          <br />
          <p>
            <b>This website was created with the REACT JavaScript FrontEnd frame work.</b> <br /> <br />
        
          </p>
          <br />

          <div className="buttonContainer">
            {/* work on Hire Me button below */}
          <button className="btn-HeroSection" onClick={handleClickPopUpForm} >HIRE ME</button>
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