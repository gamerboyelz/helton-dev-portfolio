import heroImage from "../assets/heroImage.png";


const HeroSection = () => {
    return (
      <div className="container-Hero-Section">
        <div>
          <h1>Hi, I'm Helton</h1>
          <p>
            A BSC. Information Communication and Technology Graduate with a Major
            in Software Engineer. Lets work together on your projects.
          </p>
          <br />
          <p>
            <b>This website was created with the REACT JavaScript FrontEnd frame work.</b> <br /> <br />
            Use the social media icons above to visit my LinkedIn profile, Git Hub and GitLab page and to contact me via WhatsApp if required. <br /><br /> Use the navigation link to the right of the social media icons to quickly navigate to the required section of the page.
          </p>
          <br />
          <button className="btn-HeroSection">HIRE ME</button>
        </div>
        <div>
          <img src={heroImage} id="heroSectionImage" alt="" />
        </div>
      </div>
    );
  };

  export default HeroSection;