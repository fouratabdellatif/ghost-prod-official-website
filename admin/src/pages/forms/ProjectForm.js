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
import { LoadingOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { createProject } from "../../actions/projects";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "../../actions/categories";


const { Title } = Typography;
const { Content } = Layout;

const ProjectForm = () => {

  const categories = useSelector((state) => state.categories);

  // const [partners, setPartners] = useState([
  //   {
  //     name: "",
  //     partnerLink: ""
  //   },
  // ]);

  const [videos, setVideos] = useState([
  ]);

  const initState = {
    name: '',
    category: '',
    description: '',
    imageFile: '',
    videoFile: '',
    videoId: '',
    client: '',
    clientLink: '',
    // partners: partners,
    videos: videos
  }

  const [formData, setFormData] = useState(initState);
  const [loader, setLoader] = useState(false);

  // let addPartnerFields = () => {
  //   setPartners([...partners, { name: "", partnerLink: "" }])
  //   setFormData({
  //     ...formData,
  //     partners: partners
  //   })
  // }

  // let removePartnerFields = (i) => {
  //   let newFormValues = [...partners];
  //   newFormValues.splice(i, 1);
  //   setPartners(newFormValues)
  //   setFormData({
  //     ...formData,
  //     partners: partners
  //   })
  // }

  let addVideoFields = () => {
    setVideos([...videos, { videoId: "" }])
    setFormData({
      ...formData,
      videos: videos
    })
  }

  let removeVideoFields = (i) => {
    let newFormValues = [...videos];
    newFormValues.splice(i, 1);
    setVideos(newFormValues)
    setFormData({
      ...formData,
      videos: videos
    })
  }

  // const handleInputPartnersChange = (index, event) => {
  //   const values = [...partners];
  //   const updatedValue = event.target.name;
  //   values[index][updatedValue] = event.target.value;

  //   setPartners(values);
  //   setFormData({
  //     ...formData,
  //     partners: partners
  //   })
  // };

  const handleInputVideosChange = (index, event) => {
    const values = [...videos];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setVideos(values);
    setFormData({
      ...formData,
      videos: videos
    })
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log('formData', formData);
    // console.log('value', value);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setLoader(true);
    await setFormData({
      ...formData,
      // partners: partners,
      videos: videos,
    })
    // await console.log("FORMDATA", formData);
    await dispatch(createProject(formData));
    await setLoader(false);
    await history.push('/projets');
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Layout className="Form-layout layout-default">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 7, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Ajouter un projet</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un projet!
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
                    <input placeholder="Nom"
                      name="name"
                      onChange={handleChange}
                      required
                    />
                    <select
                      placeholder="Catégorie"
                      name="category"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Catégorie...</option>
                      {categories.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <input
                    type='file'
                    accept='image/*'
                    // ref={inputRef}
                    filename="imageFile"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, imageFile: e.target.files[0] })
                    }}
                    required
                  />
                  <input
                    type='file'
                    accept='video/*'
                    // ref={inputRef}
                    filename="videoFile"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, videoFile: e.target.files[0] })
                    }}
                    required
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <input placeholder="ID VIDEO"
                    name="videoId"
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input placeholder="Nom du client"
                      name="client"
                      onChange={handleChange}
                      required
                    />
                    <input placeholder="Lien client"
                      name="clientLink"
                      onChange={handleChange}
                      required
                    />
                  </Space>
                </Col>
                {/* <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <label style={{
                    fontWeight: 700,
                  }}>Partenaires</label>
                  {partners.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="name"
                          placeholder="Partenaire (Nom)"
                          onChange={(event) => {
                            handleInputPartnersChange(index, event)
                          }}
                          defaultValue=""
                        />
                        <input
                          name="partnerLink"
                          placeholder="Partenaire (Lien)"
                          onChange={(event) => {
                            handleInputPartnersChange(index, event)
                          }}
                          defaultValue=""
                        />
                        {
                          index ?
                            <button type="button" className="button remove" onClick={() => removePartnerFields(index)}>
                              <MinusOutlined />
                            </button>
                            : null
                        }
                      </Space>
                    </div>
                  ))}
                  <div className="button-section">
                    <button className="button add" type="button" onClick={() => addPartnerFields()}>
                      <PlusOutlined />
                    </button>
                  </div>
                </Col> */}
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <label style={{
                    fontWeight: 700,
                  }}>Autres videos</label>
                  {videos.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <input
                        name="videoId"
                        placeholder="VIDEO ID"
                        onChange={(event) => {
                          handleInputVideosChange(index, event)
                        }}
                        defaultValue=""
                      />
                      {
                        index ?
                          <button type="button" className="button remove" onClick={() => removeVideoFields(index)}>
                            <MinusOutlined />
                          </button>
                          : null
                      }
                    </div>
                  ))}
                  <div className="button-section">
                    <button className="button add" type="button" onClick={() => addVideoFields()}>
                      <PlusOutlined />
                    </button>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <textarea placeholder="à propos de ce projet"
                    name="description"
                    onChange={handleChange}
                    rows={4}
                  />
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

export default ProjectForm
