// working on body component here
const MainDetailList = () => {
    const detailListInfo = [
      {
        id: 1,
        heading: "Summary",
        informationA: "Welcome to my Website Developer portfolio; it is an ongoing project. ",
        informationB: "Updates will be made frequently to include a blog page and live projects that I have worked on"
      },
      {
        id: 2,
        heading: "Work",
        informationA: "A link or button to download my resume will be here",
        informationB: "Please visit my linkedIn profile to see my work history for now",
        informationC: "Click the linkedIn icon  in the website navigation menu"
      },
      {
        id: 3,
        heading:'Skills',
        informationA: "JavaScript, HTML, CSS, REACT, Node.js, SQL,  ",
        informationB: "icons of Skills will be placed here"
      },
      {
        id: 5,
        heading: "Projects",
        informationA: "A list of links will be posted with my live projects",
        informationB: "Please visit my git hub profile with the links provided in the footer or header of this website"
      },
    ];
  
    return (
      <div className="MainDetailListContainerA">
        {detailListInfo.map((detailListInfoObjects) => {
          return (
            <div key={detailListInfoObjects.id} className="MainDetailListContainer">
              <div className="MainDetailListContainerElements">
                <h1 id={detailListInfoObjects.id} >{detailListInfoObjects.heading}</h1>
                <p >{detailListInfoObjects.informationA}</p>
                <p >{detailListInfoObjects.informationB}</p>
                <p >{detailListInfoObjects.informationC}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default MainDetailList;
  