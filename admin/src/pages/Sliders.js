/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio
} from "antd";
// import StandardCard from '../components/layout/StandardCard.js'
import '../assets/css/Sliders.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSliders } from "../actions/slider.js";
import { SliderHomeWrapper } from "../components/_SlickSliderStyle";
import Slider from 'react-slick';
import { SliderData } from "../data/SliderData";

function Sliders() {

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

  const sliders = useSelector((state) => state.sliders);

  let data = [];

  if (!sliders || sliders.length === 0)
    data = SliderData;
  else
    data = sliders;

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getSliders());
  }, []);

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Home Slider"
            extra={
              <Radio.Group defaultValue="a">
                <Radio.Button value="a"><a id="add-mem" href="/slider">Ajouter asset</a></Radio.Button>
              </Radio.Group>
            }
          >

            <section className='slider-section'>
              <SliderHomeWrapper>
                <Slider
                  {...settings}
                >
                  {data?.map((item, index) => (
                    <div className="home-video-container" key={index}>
                      {item.video ? (
                        <video className='home-video' src={(!sliders || sliders.length === 0) ? `${item.video}` : `/uploads/${item.video}`} data-aos="fade-right" autoPlay loop muted />
                      ) : (
                        <img className='home-video' src={(!sliders || sliders.length === 0) ? `${item.image}` : `/uploads/${item.image}`} alt={item.image} />
                      )}
                      <div className='homeslider-content'>
                        <h3 data-aos="fade-down">Votre boîte de production audiovisuelle</h3>
                        <h2 data-aos='fade' className='divider'></h2>
                        <h1 data-aos="fade-up">{item.title}</h1>
                      </div>
                    </div>
                  )
                  )}
                </Slider>
              </SliderHomeWrapper>
              {/* <div className='blog-container'>
                {filteredData?.map((item, index) => (
                  <StandardCard
                    type="slider"
                    key={index}
                    item={item}
                  />
                ))}
              </div> */}
            </section>
          </Card>


        </Col>
      </Row>
    </div>
  );
}

export default Sliders;
