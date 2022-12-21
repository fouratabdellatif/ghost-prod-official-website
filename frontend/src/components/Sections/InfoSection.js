import React, { useEffect, useState } from 'react'
// import { Button } from './Button';
import "aos/dist/aos.css";
// import { animations } from '../data/aosData';
import '../../assets/css/InfoSection.css';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { useDispatch, useSelector } from 'react-redux';
import { InfoData } from '../../data/InfoData';
import { getReels } from '../../actions/reel';
import { Link } from "react-router-dom";


const InfoSection = () => {

    // const random = Math.floor(Math.random() * animations.length);
    const [isOpen, setOpen] = useState(false)

    const reelData = useSelector((state) => state.reels);
    // console.log("reeldataaaaaaa", reelData);

    let data = [];

    if (!reelData || reelData.length === 0)
        data = InfoData;
    else
        data = reelData[0];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReels());
    }, [dispatch]);

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={data?.videoId} onClose={() => setOpen(false)} />
            <section className='info-section' data-aos="fade">
                <div className='info-container'>
                    <div className='info-column-left' onClick={() => setOpen(true)}>
                        <img src={(!reelData || reelData.length === 0) ? `${data?.image}` : data?.image} alt="home" data-aos="fade-right" />
                        <BsFillPlayCircleFill className='play-icon' />
                    </div>
                    <div className='info-column-right'>
                        <h3 data-aos="fade-right">Commencer votre journée</h3>
                        <h1 data-aos="fade-left">{data?.heading}</h1>
                        <p data-aos="fade-left">{data?.paragraphOne}</p>
                        {/* <p data-aos="fade-left">{paragraphTwo}</p> */}
                        {/* <Button to="/homes" primary='true' data-aos={animations[random]}>{buttonLabel}</Button> */}
                        <Link to="/a-propos" style={{
                            textDecoration: 'none'
                        }}>
                            <p className='show-more' data-aos="fade-right">{'Lire la suite >>'}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoSection