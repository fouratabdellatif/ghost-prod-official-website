import React from 'react'
import HomeStart from '../components/HomeStart'
import InfoSection from '../components/InfoSection'
import ProjectsSection from '../components/ProjectsSection'
import { InfoData } from '../data/InfoData'
import { SliderData } from '../data/SliderData'

const HomePage = () => {
    return (
        <>
            <HomeStart slides={SliderData} />
            <InfoSection {...InfoData} />
            <ProjectsSection />
        </>
    )
}

export default HomePage