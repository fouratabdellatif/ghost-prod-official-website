/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import TeamGroup from '../components/Team/TeamGroup'
import JobForm from '../components/Form/JobForm'
import { useSelector } from 'react-redux'

const TeamPage = () => {

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "team").map((item, index) => {
        return item;
    });

    const page = data[0];

    const pageTitle = page?.pageTitle;
    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={page ? pageTitle : "Equipe"}
                bg={page ? image : bgImage}
                text={page ? text : "our warriors, our heros"}
                title={page ? title : "Our Team"}
                pageContent={
                    <>
                        <TeamGroup />
                        <JobForm />
                    </>
                } />
        </>
    )
}

export default TeamPage