/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio,
  Button
} from "antd";
// import StandardCard from '../components/layout/StandardCard.js'
import '../assets/css/Sliders.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteAllSliders, getSliders } from "../actions/slider.js";
import { SliderHomeWrapper } from "../components/_SlickSliderStyle";
import Slider from 'react-slick';
import { SliderData } from "../data/SliderData";
import ReelForm from "./forms/ReelForm";
import { getReels } from "../actions/reel";

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
  const reels = useSelector((state) => state.reels);

  const reelItem = reels[0];

  let data = [];

  if (!sliders || sliders.length === 0)
    data = SliderData;
  else
    data = sliders;

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getSliders());
    await dispatch(getReels());
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
                        <video className='home-video' src={(!sliders || sliders.length === 0) ? `${item.video}` : item.video} data-aos="fade-right" autoPlay loop muted />
                      ) : (
                        <img className='home-video' src={(!sliders || sliders.length === 0) ? `${item.image}` : item.image} alt={item.image} />
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
              {data === sliders && (
                <Button
                  type="danger"
                  htmlType="submit"
                  style={{ width: "200px", marginTop: '10px' }}
                  onClick={() => dispatch(deleteAllSliders())}
                >
                  SUPPRIMER
                </Button>
              )}
            </section>
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Reel"
          >
            <ReelForm item={reelItem} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sliders;
