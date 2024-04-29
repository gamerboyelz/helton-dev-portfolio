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
        
          </p>
          <br />

          <button className="btn-HeroSection" onClick={()=>{
            console.log("call to action button was clicked")
          }} >HIRE ME</button>

        </div>
        <div>
          <img src={heroImage} id="heroSectionImage" alt="" />
        </div>
      </div>
    );
  };

  export default HeroSection;