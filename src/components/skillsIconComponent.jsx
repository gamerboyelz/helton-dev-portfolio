import { DiJsBadge } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { DiNodejsSmall } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoSass } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
const SkillsIconComponent = ()=>{

    return(
        <div className="skillsIconComponentIconContainer">
            <h1 className="devIcons" ><DiJsBadge /></h1>
           <h1 className="devIcons"><TiHtml5  /></h1>
           <h1 className="devIcons"><FaCss3Alt  /></h1>
           <h1 className="devIcons"><IoLogoSass  /></h1>
           <h1 className="devIcons"><RiReactjsFill  /></h1>
           <h1 className="devIcons"><DiNodejsSmall  /></h1>
           <h1 className="devIcons"><GrMysql /></h1>
        </div>
    )
}

export default SkillsIconComponent;