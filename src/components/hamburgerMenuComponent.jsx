import { HiOutlineMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

const HamBurgerMenu = ()=>{

    return(
        <IconContext.Provider value={{size: "2.5em"}}>
        <div className="hamBurgerMenu"><HiOutlineMenu/></div>
        </IconContext.Provider>
    )
}
export default HamBurgerMenu;