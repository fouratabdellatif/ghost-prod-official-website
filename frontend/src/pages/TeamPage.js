import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import TeamGroup from '../components/TeamGroup'
import JobForm from '../components/Form/JobForm'

const TeamPage = () => {

    return (
        <>
            <CasualPage pageTitle="Equipe" bg={bgImage} text="our warriors, our heros" title="Our Team" pageContent={
                <>
                    <TeamGroup />
                    <JobForm />
                </>
            } />
        </>
    )
}

export default TeamPage