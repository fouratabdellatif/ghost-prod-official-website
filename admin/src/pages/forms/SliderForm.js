import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Spin
} from "antd";
import { createSlider } from "../../actions/slider";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";


const { Title } = Typography;
const { Content } = Layout;

const SliderForm = () => {

  const initState = {
    title: '',
    file: '',
    // image: '',
    // video: '',
  }

  const [formData, setFormData] = useState(initState);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    // console.log('formData', formData);
    // console.log('value', value);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setLoader(true);
    await setFormData({
      ...formData
    })
    // await console.log("FORMDATA", formData);
    await dispatch(createSlider(formData));
    await setLoader(false);
    await history.push('/sliders');
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
            <Title className="mb-15">Ajouter un asset</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un asset!
            </Title>
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
                    <input
                      placeholder="Texte"
                      name="title"
                      onChange={handleChange}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <input
                    type='file'
                    // ref={inputRef}
                    filename="file"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, file: e.target.files[0] })
                    }}
                  />
                  {/* <input
                    type='file'
                    accept='image/*'
                    // ref={inputRef}
                    filename="image"
                    onChange={(e) => {
                      console.log(e.target.files[0])
                      setFormData({ ...formData, image: e.target.files[0] })
                    }}
                  /> */}
                  {/* <input
                    type='file'
                    accept='video/*'
                    // ref={inputRef}
                    filename="video"
                    onChange={(e) => {
                      console.log(e.target.files[0])
                      setFormData({ ...formData, video: e.target.files[0] })
                    }}
                  /> */}
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  {loader ? (
                    <Spin indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 32,
                        }}
                        spin
                      />} />
                  ) : (
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      ENREGISTRER
                    </Button>
                  )}
                </Col>
              </Space>
            </form>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default SliderForm
