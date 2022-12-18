import React from 'react'
import '../assets/css/AboutUs.css'
import { TextData } from '../data/TextData'
// import teamImage from '../assets/images/bg08.jpg'
// import Dailymotion from 'react-dailymotion';
import YouTube from 'react-youtube';

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
                            <p key={index} className='aboutus__hero-paragraph'>
                                {item.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
