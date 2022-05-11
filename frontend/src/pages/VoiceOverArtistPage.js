/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import { VoiceOverData } from '../data/VoiceOverData'
import { useParams } from 'react-router-dom'
import VoiceOverArtist from '../components/VoiceOverArtist'


const VoiceOverArtistPage = () => {

    const { id } = useParams();
    console.log(id)


    let artists = VoiceOverData.filter((item) => item.id == id).map((item, index) => {
        return item;
    });

    const artist = artists[0];
    console.log('artist', artist);

    return (
        <>
            <CasualPage pageTitle="Voice Over" bg={bgImage} text="where you can find the best voice-over artists" title="Voice-Over" pageContent={
                <>
                    <VoiceOverArtist
                        item={artist}
                    />
                </>
            } />
        </>
    )
}

export default VoiceOverArtistPage