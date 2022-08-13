import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space
} from "antd";
import { createReel, updateReel } from "../../actions/reel";
import { useDispatch } from "react-redux";
import "../../assets/css/ReelForm.css";
import preview from "../../assets/images/preview.jpg"


const { Title } = Typography;
const { Content } = Layout;

const ReelForm = ({ item }) => {

  const heading = item?.heading;
  const paragraphOne = item?.paragraphOne;
  const videoId = item?.videoId;
  const image = item?.image;

  const initState = {
    heading: heading,
    paragraphOne: paragraphOne,
    videoId: videoId,
    image: image,
  }

  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log('formData', formData);
    console.log('value', value);
  }

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFormData({
      ...formData
    })
    await console.log("FORMDATA", formData);
    if (item)
      await dispatch(updateReel(item._id, formData));
    else {
      await dispatch(createReel(formData));
    }
  }


  return (
    <Layout className="Form-layout layout-default">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 7, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Update Reel</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour mettre à jour votre reel info!
            </Title>
            <div className='info-container'>
              <div className='info-column-left'>
                <img src={item ? image : preview} alt="home" data-aos="fade-right" />
              </div>
              <div className='info-column-right'>
                <form
                  className="row-col"
                  onSubmit={handleSubmit}
                  encType="multiple/form-data"
                >
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Col
                      xs={{ span: 24, offset: 0 }}
                      lg={{ span: 7, offset: 2 }}
                      md={{ span: 12 }}
                    >
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <textarea
                          placeholder="Heading"
                          name="heading"
                          onChange={handleChange}
                          defaultValue={heading}
                        />
                        <textarea
                          placeholder="Paragraph"
                          name="paragraphOne"
                          onChange={handleChange}
                          defaultValue={paragraphOne}
                        />
                      </Space>
                    </Col>
                    <Col
                      xs={{ span: 24, offset: 0 }}
                      lg={{ span: 7, offset: 2 }}
                      md={{ span: 12 }}
                    >
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          placeholder="Video ID"
                          name="videoId"
                          onChange={handleChange}
                          defaultValue={videoId}
                        />
                        <input
                          type='file'
                          accept='image/*'
                          // ref={inputRef}
                          filename="image"
                          onChange={(e) => {
                            console.log(e.target.files[0])
                            setFormData({ ...formData, image: e.target.files[0] })
                          }}
                        />
                      </Space>
                    </Col>
                    <Col
                      xs={{ span: 24, offset: 0 }}
                      lg={{ span: 7, offset: 2 }}
                      md={{ span: 12 }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                      >
                        AJOUTER
                      </Button>
                    </Col>
                  </Space>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default ReelForm
