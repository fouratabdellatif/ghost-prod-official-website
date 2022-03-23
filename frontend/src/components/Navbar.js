import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import { menuData } from "../data/MenuData";
// import Bars from '../images/bars.svg';
import { FaBars } from 'react-icons/fa';
import gpLogo from '../assets/images/ghostprodLogo.png';
import '../assets/css/Navbar.css';
import CasualButton from "./CasualButton";


const Navbar = ({ toggle }) => {

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
            {/* <div className="nav-menu">
                {menuData.map((item, index) => (
                    <Link className="nav-menu-link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div> */}
            <div className="right-side-menu">
                <CasualButton
                    link="/contact"
                    text="Contact Us"
                    icon={
                        <FaBars className="menu-bars" onClick={toggle} />
                    }
                />
            </div>
        </nav>
    )
}

export default Navbar