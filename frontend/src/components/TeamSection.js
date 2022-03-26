import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import '../assets/css/TeamSection.css';
import CasualButton from './CasualButton';
import SectionTitle from './SectionTitle';
import CardSlider from './Sliders/CardSlider';

const TeamSection = () => {

    return (
        <section className='team-section'>
            <SectionTitle title="Notre équipe" />
            <div className='team-container'>
                <CardSlider />
            </div>
            <div data-aos="slide-left" className='team-btn'>
                <CasualButton
                    text="Plus de détails"
                    link="/team"
                    icon={
                        <MdOutlineArrowForwardIos className="icon-btn" />
                    }
                />
            </div>
        </section>
    )
}

export default TeamSection