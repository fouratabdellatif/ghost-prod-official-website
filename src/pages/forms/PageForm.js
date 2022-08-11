/* eslint-disable eqeqeq */
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space
} from "antd";
import { createPage, updatePage } from "../../actions/pages";
import { useDispatch } from "react-redux";
import "../../assets/css/PageForm.css";
import preview from "../../assets/images/preview.jpg"


const { Title } = Typography;
const { Content } = Layout;

const PageForm = ({ data, name, pageName }) => {

  let pages = data.filter((item) => item.name == name).map((item, index) => {
    return item;
  });

  const page = pages[0];

  const title = page?.title;
  const pageTitle = page?.pageTitle;
  const text = page?.text;
  const image = page?.image;

  const initState = {
    title: title,
    pageTitle: pageTitle,
    text: text,
    image: image,
    name: name
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
    if (page)
      await dispatch(updatePage(page._id, formData));
    else {
      await dispatch(createPage(formData));
    }
  }


  return (
    <Layout className="Form-layout layout-default">
      <Content className="signin">
        <Row gutter={[2, 0]} justify="space-around">
          <Col
          // xs={{ span: 24, offset: 0 }}
          // lg={{ span: 7, offset: 2 }}
          // md={{ span: 12 }}
          >
            <Title className="mb-15">
              {pageName}
            </Title>
            <div className='info-container'>
              <div className='info-column-left'>
                <img src={page ? `/uploads/${image}` : preview} alt="home" data-aos="fade-right" />
              </div>
              <div className='info-column-right'>
                <form
                  className="row-col"
                  onSubmit={handleSubmit}
                  encType="multiple/form-data"
                >
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Col
                    // xs={{ span: 24, offset: 0 }}
                    // lg={{ span: 7, offset: 2 }}
                    // md={{ span: 12 }}
                    >
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          placeholder="Titre"
                          name="title"
                          onChange={handleChange}
                          defaultValue={title}
                        />
                        <input
                          placeholder="Titre de la page"
                          name="pageTitle"
                          onChange={handleChange}
                          defaultValue={pageTitle}
                        />
                      </Space>
                    </Col>
                    <Col
                    // xs={{ span: 24, offset: 0 }}
                    // lg={{ span: 7, offset: 2 }}
                    // md={{ span: 12 }}
                    >
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <textarea
                          placeholder="Texte"
                          name="text"
                          onChange={handleChange}
                          defaultValue={text}
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
                    // xs={{ span: 24, offset: 0 }}
                    // lg={{ span: 7, offset: 2 }}
                    // md={{ span: 12 }}
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
    </Layout >
  )
}

export default PageForm
