import React, { useEffect } from 'react'
import SectionTitle from './SectionTitle'
import '../../assets/css/PartnershipsSection.css'
import PartnerCardSlider from '../Sliders/PartnerCardSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getPartners } from '../../actions/partners'

const PartnershipsSection = () => {

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 2000,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
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

    const partners = useSelector((state) => state.partners);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPartners());
    }, [dispatch]);
    
    return (!partners || partners.length === 0) ? (
        null
    ) : (
        <section className='partnerships-section'>
            <div className='partnerships-container'>
                <div className='part-section'>
                    <SectionTitle miniTitle="Nos Clients " title="& Références" />
                    <p data-aos="slide-right" className='part-msg'>Ils font partie de ceux qui ont choisi GhostProd</p>
                </div>
                <div className='part-section'>
                    <p data-aos="slide-left" className='desc-section'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className='part-section'>
                <PartnerCardSlider settings={settings} data={partners} />
            </div>
        </section>
    )
}

export default PartnershipsSection