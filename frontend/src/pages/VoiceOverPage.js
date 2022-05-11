import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import VoiceOverGroup from '../components/VoiceOverGroup'
// import VoiceOverForm from '../components/Form/VoiceOverForm'


const VoiceOverPage = () => {

    return (
        <>
            <CasualPage pageTitle="Voice Over" bg={bgImage} text="where you can find the best voice-over artists" title="Voice-Over" pageContent={
                <>
                    <VoiceOverGroup />
                    {/* <VoiceOverForm /> */}
                </>
            } />
        </>
    )
}

export default VoiceOverPage