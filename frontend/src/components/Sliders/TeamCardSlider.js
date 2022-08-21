/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Slider from "react-slick";
import TeamCard from "../Cards/TeamCard";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { SliderWrapper } from "./_SlickSliderStyle";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../../actions/members";

function TeamCardSlider({ settings }) {

    const members = useSelector((state) => state.members);

    // console.log("memberrrrrs", members)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMembers());
    }, [dispatch]);

    return (
        <SliderWrapper>
            <Slider
                {...settings}
                prevArrow={<MdOutlineArrowBackIos />}
                nextArrow={<MdOutlineArrowForwardIos />}
            >
                {members.map((item, index) => (
                    <TeamCard
                        key={index}
                        item={item}
                    />
                ))}
            </Slider>
        </SliderWrapper>
    );
}

export default TeamCardSlider
