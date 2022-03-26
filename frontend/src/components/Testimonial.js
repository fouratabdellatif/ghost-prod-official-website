import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonial.css";
// import { Avatar } from "@material-ui/core";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
// import SectionTitle from "./SectionTitle";

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
const Testimonial = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", marginTop: 20, backgroundColor: '#e1a33b', padding: '100px' }}
        >
            <div style={{ width: "100%", textAlign: "center" }}>
                {/* <SectionTitle title="Témoignages" /> */}
                {/* <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1> */}
                <Slider slidesToShow={2} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "justify",
                color: "#000000",
                width: '80%',
                margin: 'auto auto auto auto'
            }}
        >
            {/* <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            /> */}
            <p style={{
                color: '#000000'
            }}>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25, textAlign: 'right' }}>
                <span style={{ fontWeight: 800 }}>Jack Sparrow</span> ,
                Media Analyst
            </p>
        </div>
    );
};

export default Testimonial;