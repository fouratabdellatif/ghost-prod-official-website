import React from 'react'
import SectionTitle from './SectionTitle'
import '../assets/css/PartnershipsSection.css'

const PartnershipsSection = () => {
    return (
        <section className='partnerships-section'>
            <div className='partnerships-container'>
                <div className='part-section'>
                    <SectionTitle title="Nos Clients & Références" />
                    <p data-aos="slide-right" className='part-msg'>Ils font partie de ceux qui ont choisi GhostProd</p>
                </div>
                <div className='part-section'>
                    <p data-aos="slide-left" className='desc-section'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PartnershipsSection