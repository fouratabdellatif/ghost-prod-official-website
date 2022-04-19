import React from 'react'
import BlogSection from '../components/Sections/BlogSection'
import HomeSlider from '../components/HomeSlider'
// import HomeStart from '../components/HomeStart'
import InfoSection from '../components/Sections/InfoSection'
import PartnershipsSection from '../components/Sections/PartnershipsSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import TeamSection from '../components/Sections/TeamSection'
import TestimonialsSection from '../components/Sections/TestimonialsSection'
import { InfoData } from '../data/InfoData'
// import { SliderData } from '../data/SliderData'

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