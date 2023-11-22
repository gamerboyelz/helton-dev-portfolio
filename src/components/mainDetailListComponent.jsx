// working on body component here
const MainDetailList = () => {
    const detailListInfo = [
      {
        id: 1,
        heading: "Summary",
        informationA: "Something about  Summary Something about",
        informationB: "Something about  Summary"
      },
      {
        id: 2,
        heading: "Work",
        informationA: "Something about  Summary Something about",
        informationB: "Something bout Work experience"
      },
      {
        id: 3,
        heading: "Skills",
        informationA: "Something about  Summary Something about",
        informationB: "Something bout Work experience"
      },
      {
        id: 4,
        heading: "Projects",
        informationA: "Something about  Summary Something about",
        informationB: "Something bout Work experience"
      },
    ];
  
    return (
      <div className="MainDetailListContainerA">
        {detailListInfo.map((detailListInfoObjects) => {
          return (
            <div key={detailListInfoObjects.id} className="MainDetailListContainer">
              <div className="MainDetailListContainerElements">
                <h1 >{detailListInfoObjects.heading}</h1>
                <p >{detailListInfoObjects.informationA}</p>
                <p >{detailListInfoObjects.informationB}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default MainDetailList;
  