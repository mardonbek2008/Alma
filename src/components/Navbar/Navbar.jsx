import React from 'react'
import css from "./Navbar.module.css"
import Logo from "./assets/icons/Frame.png"
import { NavLink } from 'react-router-dom'
import Responsiv from "./Offcanvas/OffCanvasExample"
function Navbar() {
    return (
        <div className={css.navbar}>
            <div className={css.alma_logo}>
                <img src={Logo} alt="" className={css.logo} />
            </div>
            <div className={css.navbar_linkbox}>
                <div className={css.linkbox_top}>
                    <NavLink className={css.navbar_links} to="#" >Get Started</NavLink>
                    <NavLink className={css.navbar_links} to="#" >How It Works</NavLink>
                    <NavLink className={css.navbar_links} to="#" >For Providers</NavLink>
                    <NavLink className={css.navbar_links} to="#" >About Alma</NavLink>
                </div>
                <div className={css.navbar_buttonbox}>
                    <NavLink className={css.navbar_button_one} to="" >Login</NavLink>
                    <NavLink className={css.navbar_button_two} to="" >Find a Provider</NavLink>
                </div>
            </div>
            <div className={css.ofcanvas_box}>
                <Responsiv />
            </div>
        </div>
    )
}

export default Navbar