import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
// import Bars from '../images/bars.svg';
import { FaBars } from 'react-icons/fa';
import gpLogo from '../images/ghostprodLogo.png';
import '../assets/css/Navbar.css';


const Navbar = ({ toggle }) => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
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
            <FaBars className="menu-bars" onClick={toggle} />
            <div className="nav-menu">
                {menuData.map((item, index) => (
                    <Link className="nav-menu-link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="nav-btn">
                <Button to="/contact" primary='true'>Contact Us</Button>
            </div>
        </nav>
    )
}

export default Navbar