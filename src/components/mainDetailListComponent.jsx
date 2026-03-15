// working on body component here
import SkillsIconComponent from "./skillsIconComponent";

const skillsIconComponent = SkillsIconComponent
const MainDetailList = () => {
     const handleClickVisitProject1 = ()=>{
        window.open('https://www.linkedin.com/in/helton-ellison-softwareengineer/')
    }

    const detailListInfo = [
      {
        id: 1,
        heading: "Summary",
        informationA: "Welcome to my Website Developer portfolio; it is an ongoing project. ",
        informationB: "Updates will be made frequently to include a blog page and live projects that I have worked on"
      },
      {
        id: 2,
        heading: "Work History",
        informationA: "Please use the Download CV button to review a copy of my CV/Resume ",
        informationB: "visit my linkedIn profile to learn more by",
        informationC: "clicking the linkedIn icon  in the website navigation menu"
      },
      {
        id: 3,
        heading:'Skills',
        informationA: "JavaScript, HTML, CSS, REACT, Node.js, SQL  ",
        informationB: skillsIconComponent() /* The component could also be placed here like this --> <SkillsIconComponent />*/
      },

      {
        id: 4,
        heading: "Projects",
        informationA: "A list of links will be posted with my live projects",
        informationB: "Please visit my git hub profile with the links provided in the footer or header of this website",
        informationC: "Memory Notes App : https://memorynotes.netlify.app/"
      },
    ];
  
    return (
      <div className="MainDetailListContainerA">
        {detailListInfo.map((detailListInfoObjects) => {
          return (
            <div key={detailListInfoObjects.id} className="MainDetailListContainer">
              <div id={detailListInfoObjects.id}  className="MainDetailListContainerElements">
                <h1>{detailListInfoObjects.heading}</h1>
                <div>{detailListInfoObjects.informationA}</div>
                <div>{detailListInfoObjects.informationB}</div>
                <div onClick = {handleClickVisitProject1} >{detailListInfoObjects.informationC} </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default MainDetailList;
  