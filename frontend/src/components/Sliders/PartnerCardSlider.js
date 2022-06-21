/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    // useEffect
} from "react";
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import PartnerCard from "../Cards/PartnerCard";
import { SliderWrapper } from "./_SlickSliderStyle";
// import { useDispatch, useSelector } from "react-redux";
// import { getMembers } from "../../actions/members";

function PartnerCardSlider({ settings, data }) {

    // const partners = useSelector((state) => state.partners);

    // console.log("partnerssssss", partners)

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getPartners());
    // }, [dispatch]);

    return (
        <SliderWrapper>
            <Slider
                {...settings}
                prevArrow={<MdOutlineArrowBackIos />}
                nextArrow={<MdOutlineArrowForwardIos />}
            >
                {data.map((item, index) => (
                    <PartnerCard
                        key={index}
                        item={item}
                    />
                )
                )}
            </Slider>
        </SliderWrapper>
    );
}

export default PartnerCardSlider
