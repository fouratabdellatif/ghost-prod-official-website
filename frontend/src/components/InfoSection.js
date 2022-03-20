import React from 'react'
import { Button } from './Button';
import "aos/dist/aos.css";
import { animations } from '../data/aosData';
import '../assets/css/InfoSection.css';


const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    image
}) => {

    const random = Math.floor(Math.random() * animations.length);

    return (
        <section className='info-section'>
            <div className='info-container'>
                <div className='info-column-left'>
                    <img src={image} alt="home" data-aos="fade-right" />
                </div>
                <div className='info-column-right'>
                    <h1 data-aos="fade-left">{heading}</h1>
                    <p data-aos="fade-left">{paragraphOne}</p>
                    <p data-aos="fade-left">{paragraphTwo}</p>
                    <Button to="/homes" primary='true' data-aos={animations[random]}>{buttonLabel}</Button>
                </div>
            </div>
        </section>
    )
}

export default InfoSection