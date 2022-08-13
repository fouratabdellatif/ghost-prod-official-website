/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import { useParams } from 'react-router-dom'
import VoiceOverArtist from '../components/VoiceOver/VoiceOverArtist'
import { useSelector } from 'react-redux'


const VoiceOverArtistPage = () => {

    const { id } = useParams();

    const artistsData = useSelector((state) => state.artists);

    let artists = artistsData.filter((item) => item._id == id).map((item, index) => {
        return item;
    });

    const artist = artists[0];

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "voice-over").map((item, index) => {
        return item;
    });

    const page = data[0];

    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={`${artist.firstname} ${artist.lastname} | Voice-Over`}
                bg={page ? image : bgImage}
                text={page ? text : "where you can find the best voice-over artists"}
                title={page ? title : "Voice-Over"}
                pageContent={
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