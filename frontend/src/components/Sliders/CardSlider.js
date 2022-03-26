/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Slider from "react-slick";
import { TeamData } from "../../data/TeamData";
import TeamCard from "../Cards/TeamCard";
import SliderWrapper from "./_SlickSliderStyle";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

function CardSlider() {

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
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

    return (
        <SliderWrapper>
            <Slider
                {...settings}
                prevArrow={<MdOutlineArrowBackIos />}
                nextArrow={<MdOutlineArrowForwardIos />}
            >
                {TeamData.map((item, index) => (
                    <TeamCard
                        key={index}
                        firstname={item.firstname}
                        lastname={item.lastname}
                        spec={item.spec}
                        image={item.image}
                        facebook={item.facebook}
                        instagram={item.instagram}
                        linkedin={item.linkedin}
                    />
                ))}
            </Slider>
        </SliderWrapper>
    );
}

export default CardSlider
