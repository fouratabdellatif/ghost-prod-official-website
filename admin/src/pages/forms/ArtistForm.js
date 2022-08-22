/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space
} from "antd";
import { createArtist } from "../../actions/artists";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


const { Title } = Typography;
const { Content } = Layout;

const ArtistForm = () => {

  const { id } = useParams();

  const artistsData = useSelector((state) => state.artists);

  let artists = artistsData.filter((item) => item?._id == id).map((item, index) => {
    return item;
  });

  const artist = artists[0];

  const initState = id ? {
    firstname: artist?.firstname,
    lastname: artist?.lastname,
    city: artist?.city,
    phone: artist?.phone,
    email: artist?.email,
    bio: artist?.bio,
    facebook: artist?.facebook,
    instagram: artist?.instagram,
    linkedin: artist?.linkedin,
    imageFile: artist?.imageFile,
    musicSrc: artist?.musicSrc,
  } : {
    firstname: '',
    lastname: '',
    city: '',
    phone: '',
    email: '',
    bio: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    imageFile: '',
    musicSrc: '',
  }

  console.log(initState);

  const [formData, setFormData] = useState();

  useEffect(async() => {
    await setFormData(initState);
  }, [])

  console.log("formdata:", formData);

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
    // await console.log("FORMDATA", formData);
    await dispatch(createArtist(formData));
    await history.push('/voice-over-artists');
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
            <Title className="mb-15">Ajouter un artiste</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un artiste!
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
                    <input placeholder="First Name"
                      name="firstname"
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Last Name"
                      name="lastname"
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
                    name="imageFile"
                    accept='image/*'
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, imageFile: e.target.files[0] })
                    }}
                  />
                  <input
                    type='file'
                    accept='audio/*'
                    // ref={inputRef}
                    name="musicSrc"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, musicSrc: e.target.files[0] })
                    }}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input placeholder="Ville"
                      name="city"
                      onChange={handleChange}
                    />
                    <input placeholder="Phone"
                      name="phone"
                      onChange={handleChange}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                    <input placeholder="Facebook"
                      name="facebook"
                      onChange={handleChange}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input placeholder="Instagram"
                      name="instagram"
                      onChange={handleChange}
                    />
                    <input placeholder="Linkedin"
                      name="linkedin"
                      onChange={handleChange}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <textarea placeholder="Bio"
                    name="bio"
                    onChange={handleChange}
                    rows={4}
                  />
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
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default ArtistForm
