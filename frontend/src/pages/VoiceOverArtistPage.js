/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import { useParams } from 'react-router-dom'
import VoiceOverArtist from '../components/VoiceOver/VoiceOverArtist'
import { useDispatch, useSelector } from 'react-redux'
import { getArtists } from '../actions/artists'


const VoiceOverArtistPage = () => {

    const { id } = useParams();

    const artistsData = useSelector((state) => state.artists);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getArtists());
    }, [dispatch]);


    let artists = artistsData.filter((item) => item._id == id).map((item, index) => {
        return item;
    });

    const artist = artists[0];

    return (
        <>
            <CasualPage pageTitle={`${artist.firstname} ${artist.lastname} | Voice-Over`} bg={bgImage} text="where you can find the best voice-over artists" title="Voice-Over" pageContent={
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