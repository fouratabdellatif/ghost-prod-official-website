import React, { useEffect } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import '../../assets/css/TeamSection.css';
import CasualButton from '../CasualButton';
import SectionTitle from './SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../../actions/members';
import TeamCardSlider from '../Sliders/TeamCardSlider';

const TeamSection = () => {

    const settings = {
        dots: false,
        autoplay: false,
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

    const members = useSelector((state) => state.members);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMembers());
    }, [dispatch]);

    return (!members || members.length === 0) ? (
        null
    ) : (
        <section className='team-section'>
            <SectionTitle miniTitle="Notre " title="équipe" />
            <div className='team-container'>
                <TeamCardSlider settings={settings} data={members} />
            </div>
            <div data-aos="slide-left" className='team-btn'>
                <CasualButton
                    text="Plus de détails"
                    link="/team"
                    icon={
                        <MdOutlineArrowForwardIos className="icon-btn" />
                    }
                />
            </div>
        </section>
    )
}

export default TeamSection