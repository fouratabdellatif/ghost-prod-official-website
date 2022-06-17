import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography
} from "antd";
import { MinusCircleOutlined, PlusOutlined, ToTopOutlined } from "@ant-design/icons";
import { createProject } from "../../actions/projects";
import { useDispatch } from "react-redux";


const { Title } = Typography;
const { Content } = Layout;

const ProjectForm = () => {

  const [partners, setPartners] = useState([
    {
      name: "",
      partnerLink: ""
    },
  ]);

  const [videos, setVideos] = useState([
    {
      videoId: ""
    }
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
    partners: partners,
    videos: videos
  }

  const [formData, setFormData] = useState(initState);

  let addPartnerFields = () => {
    setPartners([...partners, { name: "", partnerLink: "" }])
    setFormData({
      ...formData,
      partners: partners
    })
  }

  let removePartnerFields = (i) => {
    let newFormValues = [...partners];
    newFormValues.splice(i, 1);
    setPartners(newFormValues)
    setFormData({
      ...formData,
      partners: partners
    })
  }

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

  const handleInputPartnersChange = (index, event) => {
    const values = [...partners];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setPartners(values);
    setFormData({
      ...formData,
      partners: partners
    })
  };

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
    console.log('value', value);
  }

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFormData({
      ...formData,
      partners: partners,
      videos: videos
    })
    await console.log("FORMDATA", formData);
    await dispatch(createProject(formData));
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
            <Title className="mb-15">Ajouter un projet</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un projet!
            </Title>
            <form
              className="row-col"
              onSubmit={handleSubmit}
              encType="multiple/form-data"
            >
              <input placeholder="Nom"
                name="name"
                onChange={handleChange}
              />
              <input
                placeholder="Catégorie"
                name="category"
                onChange={handleChange}
              />
              <input placeholder="à propos de ce projet"
                name="description"
                onChange={handleChange}
              />
              <input
                type='file'
                accept='image/*'
                // ref={inputRef}
                filename="imageFile"
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setFormData({ ...formData, imageFile: e.target.files[0] })
                }}
              />
              <input
                type='file'
                accept='video/*'
                // ref={inputRef}
                filename="videoFile"
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setFormData({ ...formData, videoFile: e.target.files[0] })
                }}
              />
              <input placeholder="ID VIDEO"
                name="videoId"
                onChange={handleChange}
              />
              <input placeholder="Nom du client"
                name="client"
                onChange={handleChange}
              />
              <input placeholder="Lien client"
                name="clientLink"
                onChange={handleChange}
              />

              {partners.map((field, index) => (
                <div className="form-inline" key={index}>
                  <label>Name</label>
                  <input
                    name="name"
                    placeholder="Enter Name"
                    onChange={(event) => {
                      handleInputPartnersChange(index, event)
                    }}
                    defaultValue=""
                  />
                  <label>partnerLink</label>
                  <input
                    name="partnerLink"
                    placeholder="Enter Link"
                    onChange={(event) => {
                      handleInputPartnersChange(index, event)
                    }}
                    defaultValue=""
                  />
                  {
                    index ?
                      <button type="button" className="button remove" onClick={() => removePartnerFields(index)}>Remove</button>
                      : null
                  }
                </div>
              ))}
              <div className="button-section">
                <button className="button add" type="button" onClick={() => addPartnerFields()}>Add</button>
              </div>




              {videos.map((field, index) => (
                <div className="form-inline" key={index}>
                  <label>ID VIDEO</label>
                  <input
                    name="videoId"
                    placeholder="Enter VIDEO ID"
                    onChange={(event) => {
                      handleInputVideosChange(index, event)
                    }}
                    defaultValue=""
                  />
                  {
                    index ?
                      <button type="button" className="button remove" onClick={() => removeVideoFields(index)}>Remove</button>
                      : null
                  }
                </div>
              ))}
              <div className="button-section">
                <button className="button add" type="button" onClick={() => addVideoFields()}>Add</button>
              </div>



              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                AJOUTER
              </Button>

            </form>

          </Col>

        </Row>
      </Content>

    </Layout>
  )
}

export default ProjectForm
