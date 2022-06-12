/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Upload,
  Typography,
  Form,
  Input,
  // message,
  Space,
  Modal,
} from "antd";
import { MinusCircleOutlined, PlusOutlined, ToTopOutlined } from "@ant-design/icons";
import { createProject } from "../../actions/projects";
import { useDispatch } from "react-redux";


const { Title } = Typography;
const { Content } = Layout;

const ProjectForm = () => {


  // const inputRef = useRef(null);
  // const triggerFileSelectPopup = () => inputRef.current.click();

  // const uploadButton = (
  //   <div onClick={triggerFileSelectPopup}>
  //     <PlusOutlined />
  //     <div className="ant-upload-text">Upload</div>
  //   </div>
  // );

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  // const [imageFile, setImageFile] = useState("");
  // const [videoFile, setVideoFile] = useState("");

  const initState = {
    name: '',
    category: '',
    description: '',
    imageFile: '',
    videoFile: '',
    videoId: '',
    client: '',
    clientLink: '',
    partners: [{
      name: '',
      partnerLink: ''
    },],
    videos: [{
      videoId: ''
    },]
  }

  const [formData, setFormData] = useState(initState);

  // const handlePreview = (file) => {
  //   setPreviewVisible(true);
  //   setPreviewImage(file.url || file.thumbUrl);
  // }

  const handleCancel = () => {
    setPreviewVisible(false);
  }

  // const handleVideo = ({ file }) => {
  //   setVideoFile(file.name);
  //   setFormData({
  //     ...formData,
  //     "video": file
  //   });
  //   console.log('formData', formData);
  //   console.log('value', file.name);
  // }

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.id;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log('formData', formData);
    console.log('value', value);
  }

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  function handleFinish() {
    console.log("VALUES", formData);
    dispatch(createProject(formData));
  }

  // const onChange = (e) => {
  //   let formData = new FormData()
  //   formData.append('imageFile', e.file)
  //   console.log(e.file)
  //   console.log(formData)
  // }

  // const formProps = {
  //   name: "imageFile",
  //   action: "http://localhost:5000",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       // console.log(info.file, info.fileList);
  //       let formData = new FormData()
  //       formData.append('imageFile', info.fileList[0].originFileObj, info.fileList[0].name)
  //       console.log('file', info.file)
  //       console.log('fileList', info.fileList[0].originFileObj)
  //       console.log(formData)
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

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
            <Form
              form={form}
              layout="vertical"
              className="row-col"
              onFinish={handleFinish}
              encType="multiple/form-data"
            >
              <Form.Item
                className="username"
                label="Nom"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer le nom!",
                  },
                ]}
              >
                <Input placeholder="Nom"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                className="username"
                label="Catégorie"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer la catégorie!",
                  },
                ]}
              >
                <Input
                  placeholder="Catégorie"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                className="username"
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer la description!",
                  },
                ]}
              >
                <Input placeholder="à propos de ce projet"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                name="imageFile">
                <div className="uploadfile pb-15 shadow-none">
                  {/* <Upload
                    // {...formProps}
                    accept={"image/*"}
                    type='file'
                    listType="picture-card"
                    onPreview={handlePreview}
                    // onChange={handleImage}
                    // onChange={onChange}
                    onChange={(e) => {
                      console.log(e.fileList[0]);
                      setFormData({
                        ...formData,
                        imageFile: e.fileList[0]
                      });
                    }}
                    beforeUpload={() => false}
                    maxCount={1}
                    name="imageFile"
                  > */}
                  {/* {fileList.length >= 1 ? null : uploadButton} */}
                  {/* {uploadButton} */}
                  {/* </Upload> */}
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
                  {/* <Upload
                    listType="picture-card"
                    onPreview={handlePreview}
                    beforeUpload={() => false}
                    maxCount={1}
                  >
                    {uploadButton}
                  </Upload> */}
                  <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </div>
              </Form.Item>

              <Form.Item name="videoFile">
                <div className="uploadfile pb-15 shadow-none">
                  {/* <Upload
                    // {...formProps}
                    accept={"video/*"}
                    // onChange={handleVideo}
                    beforeUpload={() => false}
                    maxCount={1}
                  >
                    <Button
                      type="dashed"
                      className="ant-full-box"
                      icon={<ToTopOutlined />}
                    >
                      Ajouter video
                    </Button>
                  </Upload> */}
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
                </div>
              </Form.Item>

              <Form.Item
                className="username"
                label="Vidéo principal (Youtube)"
                name="videoId"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer l'id du vidéo!",
                  },
                ]}
              >
                <Input placeholder="ID VIDEO"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                className="username"
                label="Client"
                name="client"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer le nom du client!",
                  },
                ]}
              >
                <Input placeholder="Nom du client"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                className="username"
                label="Lien client (Youtube, ...)"
                name="clientLink"
                type="url"

                pattern="https://.*"
                rules={[
                  {
                    required: true,
                    message: "veuillez entrer le lien du client!",
                  },
                ]}
              >
                <Input placeholder="Lien client"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.List name="partners">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: 'flex',
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          className="username"
                          label="Partenaire"
                          name={[name, 'name']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing name',
                            },
                          ]}
                        >
                          <Input placeholder="Nom du partenaire"

                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          className="username"
                          label="Lien"
                          name={[name, 'partnerLink']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing link',
                            },
                          ]}
                        >
                          <Input placeholder="Lien du partenaire"

                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Ajouter partenaire
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <Form.List name="videos">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <div key={field.key}>
                          <Form.Item
                            name={[index, "videoId"]}
                            label="ID Video (Youtube)"
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="ID Video" onChange={(e) => {
                              console.log("id", e.target.id);
                              console.log("value", e.target.value);
                            }} />
                          </Form.Item>
                          {fields.length > 1 ? (
                            <Button
                              type="danger"
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                              icon={<MinusCircleOutlined />}
                            >
                              Remove Above Field
                            </Button>
                          ) : null}
                        </div>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          style={{ width: "60%" }}
                        >
                          <PlusOutlined /> Add field
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  AJOUTER
                </Button>
              </Form.Item>

            </Form>

          </Col>

        </Row>
      </Content>

    </Layout>
  )
}

export default ProjectForm
