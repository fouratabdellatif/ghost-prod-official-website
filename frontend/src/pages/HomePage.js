import React from 'react'
import BlogSection from '../components/BlogSection'
import HomeSlider from '../components/HomeSlider'
import HomeStart from '../components/HomeStart'
import InfoSection from '../components/InfoSection'
import PartnershipsSection from '../components/PartnershipsSection'
import ProjectsSection from '../components/ProjectsSection'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { InfoData } from '../data/InfoData'
import { SliderData } from '../data/SliderData'

const HomePage = () => {
    return (
        <>
            {/* <HomeStart slides={SliderData} /> */}
            <HomeSlider />
            <InfoSection {...InfoData} />
            <ProjectsSection />
            <TeamSection />
            <TestimonialsSection />
            <BlogSection />
            <PartnershipsSection />
        </>
    )
}

export default HomePage