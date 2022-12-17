/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getSliders } from '../actions/slider';
import '../assets/css/HomeSlider.css';
import '../assets/css/HomeStart.css';
import { SliderData } from '../data/SliderData';
import { SliderHomeWrapper } from './Sliders/_SlickSliderStyle';

const HomeSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

        ],
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };

    const [isMuted, setIsMuted] = useState(true)

    const handleVideoMute = () => {
        setIsMuted(!isMuted)
    }

    const sliderData = useSelector((state) => state.sliders);

    let data = [];

    if (!sliderData || sliderData.length === 0)
        data = SliderData;
    else
        data = sliderData;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSliders());
    }, [dispatch]);

    return (
        <SliderHomeWrapper>
            <Slider
                {...settings}
            >
                {data?.map((item, index) => (
                    <div className={isMuted ? "home-video-container muted" : "home-video-container"} key={index} onClick={item.file && handleVideoMute}>
                        {item.resource_type === "video" ? (
                            <video className='home-video' src={(!sliderData || sliderData.length === 0) ? `${item.file}` : item.file} data-aos="fade-right" autoPlay loop muted={isMuted} />
                        ) : (
                            <img className='home-video' src={(!sliderData || sliderData.length === 0) ? `${item.file}` : item.file} alt={item.file} />
                        )}
                        <div className='homeslider-content' style={{
                            opacity: isMuted ? 1 : 0,
                            transition: 'ease-in-out 0.7s all'
                        }}>
                            <h3 data-aos="fade-down">Votre boîte de production audiovisuelle</h3>
                            <h2 data-aos='fade' className='divider'></h2>
                            <h1 data-aos="fade-up">{item.title}</h1>
                        </div>
                    </div>
                )
                )}
            </Slider>
        </SliderHomeWrapper>
    )
}

export default HomeSlider