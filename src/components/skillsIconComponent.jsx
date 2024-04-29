import { DiJsBadge } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { DiNodejsSmall } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoSass } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { IconContext } from "react-icons";

const SkillsIconComponent = ()=>{
    
    return(
        <IconContext.Provider value={{size: "2.5em" }}>
        <div className="skillsIconComponentIconContainer">
            <div className="devIcons" ><DiJsBadge /></div>
            <div className="devIcons"><TiHtml5  /></div>
            <div className="devIcons"><FaCss3Alt  /></div>
            <div className="devIcons"><IoLogoSass  /></div>
            <div className="devIcons"><RiReactjsFill  /></div>
            <div className="devIcons"><DiNodejsSmall  /></div>
            <div className="devIcons"><GrMysql /></div>
        </div>
        </IconContext.Provider>
    )
    
}

export default SkillsIconComponent;