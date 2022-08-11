/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonial.css";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIos style={{ color: "#000000", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowForwardIos style={{ color: "#000000", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = ({data}) => {

    const settings = {
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 2,
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

        ]
    };

    return (
        <div className="testimonial">
            <div className="testimonial-content">
                {/* <SectionTitle title="Témoignages" /> */}
                {/* <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1> */}
                <Slider {...settings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    {data?.map((item, index) =>
                        item?.visible && (
                            <Card item={item} />
                        )
                    )}
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div className="card-img-container">
            {/* <img
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            /> */}
            <p className="testimonial-text">{item?.text}</p>
            <p className="testimonial-client">
                <span className="testimonial-client-name">{item?.name}</span> ,
                {item?.spec}
            </p>
        </div>
    );
};

export default Testimonial;