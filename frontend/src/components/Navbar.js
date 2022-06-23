import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
// import Bars from '../images/bars.svg';
// import { FaBars } from 'react-icons/fa';
import gpLogo from '../assets/images/logoLight.png';
import '../assets/css/Navbar.css';
import { navbarData } from "../data/NavbarData";
import MenuButton from "./MenuButton";


const Navbar = ({ toggle, isOpen }) => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className={navbar ? "logo-container active" : "logo-container"}>
                <Link className="logo" to="/">
                    <img className={navbar ? "logo-image active" : "logo-image"} src={gpLogo} alt="Logo" />
                </Link>
            </div>
            <div className={navbar ? "nav-menu active" : "nav-menu"}>
                {navbarData?.map((item, index) => (
                    <NavLink exact className="nav-menu-link" activeClassName="nav-menu-link active" to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
            <div className="right-side-menu">
                {/* <FaBars className="icon-btn" onClick={toggle} /> */}
                <MenuButton toggle={toggle} isOpen={isOpen} />
            </div>
        </nav>
    )
}

export default Navbar