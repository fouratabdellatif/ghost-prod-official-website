/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg03.jpg'
import AboutUs from '../components/AboutUs'
import { useSelector } from 'react-redux'

const AboutUsPage = () => {

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "about-us").map((item, index) => {
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
                pageTitle={page ? pageTitle : "A Propos"}
                bg={page ? image : bgImage}
                text={page ? text : "nos réalisations, notre persévérance, notre histoire..."}
                title={page ? title : "à propos"}
                pageContent={
                    <>
                        <AboutUs />
                    </>
                } />
        </>
    )
}

export default AboutUsPage