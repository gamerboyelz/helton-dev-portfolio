import { HiOutlineMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import scrollToSection from "../utilities/smootheScrollUtility";
import { useState } from "react";

const HamBurgerMenu = ()=>{

    const smootheScrollToSection = scrollToSection
    const [openMenu, setOpenMenu] = useState(false)

    const toggleHamBurgerMenu = ()=>{
        setOpenMenu(!openMenu)
    }


    return(
        <IconContext.Provider value={{size: "2.5em"}}>
        <div className= "hamBurgerMenu" onClick={toggleHamBurgerMenu}><HiOutlineMenu/></div>
        <div className= {`menu ${openMenu ? 'open' : ''}`}>
        <div onClick={ ()=>{smootheScrollToSection('1') }}> SUMMARY </div>
          <div onClick={ ()=>{smootheScrollToSection('2')} } > WORK </div>
          <div onClick={ ()=>{smootheScrollToSection('3')}}> SKILLS </div>
          <div onClick={ ()=>{smootheScrollToSection('4')} }>PROJECT</div>
          <div>BLOG</div>
        </div>
        </IconContext.Provider>
    )
}
export default HamBurgerMenu;