/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { createArtist } from "../../actions/artists";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { LoadingOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";


const { Title } = Typography;
const { Content } = Layout;

const ArtistForm = () => {

  const { id } = useParams();

  const artistsData = useSelector((state) => state.artists);

  let artists = artistsData.filter((item) => item?._id == id).map((item, index) => {
    return item;
  });

  const artist = artists[0];

  const [langs, setLangs] = useState([]);

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
    langs: artist?.langs
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
    langs: langs
  }

  console.log(initState);

  const [formData, setFormData] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(async () => {
    await setFormData(initState);
  }, [])

  console.log("formdata:", formData);

  let addContentFields = () => {
    setLangs([...langs, ""])
    setFormData({
      ...formData,
      langs: langs
    })
  }

  let removeContentFields = (i) => {
    let newFormValues = [...langs];
    newFormValues.splice(i, 1);
    setLangs(newFormValues)
    setFormData({
      ...formData,
      langs: langs
    })
  }

  const handleInputContentsChange = (index, event) => {
    const values = [...langs];
    values[index] = event.target.value;

    setLangs(values);
    setFormData({
      ...formData,
      langs: langs
    })
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log('formData', formData);
    // console.log('value', value);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await console.log("FORMDATA", formData);
    await setLoader(true);
    await setFormData({
      ...formData,
      langs: langs,
    })
    await dispatch(createArtist(formData));
    await setLoader(false);
    await history.push('/voice-over');
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
                    <input placeholder="N° Tél"
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
                  <label style={{
                    fontWeight: 700,
                  }}>Langues</label>
                  {id ? artist?.langs?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="langs"
                          placeholder={`Step N°${index + 1}`}
                          onChange={(event) => {
                            handleInputContentsChange(index, event)
                          }}
                          defaultValue={field}
                        />
                        {
                          index ?
                            <button type="button" className="button remove" onClick={() => removeContentFields(index)}>
                              <MinusOutlined />
                            </button>
                            : null
                        }
                      </Space>
                    </div>
                  )) : langs?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="langs"
                          placeholder={`Langue N°${index + 1}`}
                          onChange={(event) => {
                            handleInputContentsChange(index, event)
                          }}
                          defaultValue=""
                        />
                        {
                          index ?
                            <button type="button" className="button remove" onClick={() => removeContentFields(index)}>
                              <MinusOutlined />
                            </button>
                            : null
                        }
                      </Space>
                    </div>))}
                  <div className="button-section">
                    <button className="button add" type="button" onClick={() => addContentFields()}>
                      <PlusOutlined />
                    </button>
                  </div>
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

export default ArtistForm
