import React, {
    // useEffect,
    useRef, useState
} from 'react';
import { Link } from 'react-router-dom';
import gpLogo from '../images/ghostprodLogo.png';
import '../assets/css/Footer.css';

const Footer =  ()=>{
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                       
                            <ul>
                                <li>
                            <div className={"logo-container"}>
                <Link className="logo" to="/">
                    <img className={"logo-image"} src={gpLogo} alt="Logo" />
                </Link>
            </div>
        
            </li>
                                <div class="description">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</div>
                            </ul>
        
                    </div>
                    <div class="footer-col">
                        <h4>Social Media</h4>
                            <ul>
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">Youtube</a></li>
                            </ul>
        
                    </div>
                    <div class="footer-col">
                        <h4>More on the Blog</h4>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Contributors And Writers</a></li>
                                <li><a href="">Write for us</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                    </div>
                    <div class="footer-col">
                        <h4>More on GhostProd</h4>
                            <ul>
                                <li><a href="">The Team</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Press</a></li>
                            </ul>
                            </div>
                    </div>
                </div>
                
        </footer>
)
}
export default Footer;