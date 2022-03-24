import React from 'react'
import '../assets/css/SectionTitle.css'

const SectionTitle = ({ title }) => {
    return (
        <h1 className='section-title' data-aos="fade-right">{title}</h1>
    )
}

export default SectionTitle