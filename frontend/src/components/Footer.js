import React from 'react';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';
import gpLogoDark from '../assets/images/logoDark.png';


function Footer() {

    let d = new Date().getFullYear();

    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items isLogo'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                <img src={gpLogoDark} className='footer-gp-logo' alt='logo-ghostprod' />
                            </Link>
                        </div>
                        <p>Ghostprod est une entreprise de production audiovisuelle spécialisée dans la réalisation de films d'entreprises, de documentaires, la couverture évènementielle et la production des émissions digitales.</p>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Informations de contact</h2>
                        <hr className="solid" />
                        <div className="material-icons">
                            <i className="fas fa-map-marker-alt"></i>
                            <span> 07 rue du Marthyr Mefteh Triki Manar 1</span>
                        </div>
                        <div className="material-icons">
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+21622926686"> 00 216 22 92 66 86</a>
                        </div>
                        <div className="material-icons">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:contact@ghostprod.net"> contact@ghostprod.net</a>
                        </div>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Actualités et informations</h2>
                        <hr className="solid" />
                        <Link to='/contact'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Contact</span1></Link>
                        <Link to='/blog'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Blog</span1></Link>
                        <Link to='/a-propos'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;À propos</span1></Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Plus sur GhostProd</h2>
                        <hr className="solid" />
                        <Link to='/equipe'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Notre Équipe</span1></Link>
                        <Link to='/services'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Nos Services</span1></Link>
                        <Link to='/voice-over'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Voice-Over</span1></Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>© {d}, Made
                        by <a href="https://inceptumje.tn/" target="_blank" rel="noreferrer">INCEPTUM Junior Entreprise</a>
                    </small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='https://www.facebook.com/Ghostprod.net'
                            target='_blank'
                            aria-label='Facebook'
                            rel="noreferrer"
                        >
                            <i class="fab fa-facebook-square" />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/ghostprod_officiel/?hl=fr'
                            target='_blank'
                            aria-label='Youtube'
                            rel="noreferrer"
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link youtube'
                            href='https://www.instagram.com/ghostprod_officiel/?hl=fr'
                            target='_blank'
                            aria-label='Instagram'
                            rel="noreferrer"
                        >
                            <i className='fab fa-youtube' />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/company/ghostprod/'
                            target='_blank'
                            aria-label='LinkedIn'
                            rel="noreferrer"
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;