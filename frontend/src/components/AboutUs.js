import React from 'react'
import '../assets/css/AboutUs.css'
import { TextData } from '../data/TextData'
// import teamImage from '../assets/images/bg08.jpg'
// import Dailymotion from 'react-dailymotion';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div className='aboutus-container'>
            <div className='row aboutus__hero-row'>
                <div className='about-us-col'>
                    <div className='aboutus__hero-text-wrapper'>
                        <h1 className='about-us-heading'>
                            <span>à</span> propos de Nous
                        </h1>
                        {/* <img src={teamImage} alt="our_team" /> */}
                        {/* <Dailymotion
                            video="x81blh3"
                            uiTheme="light"
                            className="yt-about-vid"
                        /> */}
                        <YouTube opts={{
                            width: '100%',
                            height: '100%'
                        }} className="yt-about-vid" videoId='r00ikilDxW4' />
                        {TextData?.map((item, index) => (
                            <>
                                <h3 className='aboutus__hero-subtitle'>{item.subtitle && item.subtitle}</h3>
                                <p key={index} className='aboutus__hero-paragraph'>
                                    {item.text}
                                </p>
                                <ul className='aboutus__hero-list'>
                                    {item.steps && item.steps.map((step, index) => (
                                        <li className='aboutus__hero-item' key={index}>{step}</li>
                                    ))}
                                </ul>
                            </>
                        ))}
                        <p className='aboutus__hero-paragraph'>
                            Si vous souhaitez en savoir plus sur les services proposés par Ghostprod ou si vous souhaitez discuter de votre projet de production audiovisuelle, n'hésitez pas à <Link className='contact-link' to='/contact'>contacter</Link> l'entreprise pour obtenir plus d'informations. Ghostprod se fera un plaisir de vous accompagner dans la réalisation de votre projet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
