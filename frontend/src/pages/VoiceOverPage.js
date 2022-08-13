/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import VoiceOverGroup from '../components/VoiceOver/VoiceOverGroup'
import { useSelector } from 'react-redux'
// import VoiceOverForm from '../components/Form/VoiceOverForm'


const VoiceOverPage = () => {

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "voice-over").map((item, index) => {
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
                pageTitle={page ? pageTitle : "Voice Over"}
                bg={page ? image : bgImage}
                text={page ? text : "where you can find the best voice-over artists"}
                title={page ? title : "Voice-Over"}
                pageContent={
                    <>
                        <VoiceOverGroup />
                        {/* <VoiceOverForm /> */}
                    </>
                } />
        </>
    )
}

export default VoiceOverPage