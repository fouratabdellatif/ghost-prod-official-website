import React from 'react'
import BlogSection from '../components/Sections/BlogSection'
import HomeSlider from '../components/HomeSlider'
// import HomeStart from '../components/HomeStart'
import InfoSection from '../components/Sections/InfoSection'
import PartnershipsSection from '../components/Sections/PartnershipsSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import TeamSection from '../components/Sections/TeamSection'
import TestimonialsSection from '../components/Sections/TestimonialsSection'
import { Helmet } from 'react-helmet';
// import { SliderData } from '../data/SliderData'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>GHOSTPROD &copy;</title>
            </Helmet>
            {/* <HomeStart slides={SliderData} /> */}
            <HomeSlider />
            <InfoSection />
            <ProjectsSection />
            <TeamSection />
            <TestimonialsSection />
            <BlogSection />
            <PartnershipsSection />
        </>
    )
}

export default HomePage