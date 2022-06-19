import React, { Component } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Upload,
  Typography,
  Form,
  Input,
  message,
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";


const { Title } = Typography;
const { Content } = Layout;
const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout className="Form-layout layout-default">
         
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 7, offset: 2 }}
                md={{ span: 12 }}
              >
                
                <Title className="mb-15">Ajouter un membre</Title>
                <Title className="font-regular text-muted" level={5}>
                  veuillez remplir ces champs pour ajouter un membre a l'équipe !
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Prénom"
                    name="prenom"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le prenom !",
                      },
                    ]}
                  >
                    <Input placeholder="Prenom" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Nom"
                    name="Nom"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le nom !",
                      },
                    ]}
                  >
                    <Input placeholder="Nom" />
                  </Form.Item>

                  
                  <Form.Item
                    className="username"
                    label="le poste occupé"
                    name="poste"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le poste occupé !",
                      },
                    ]}
                  >
                    <Input placeholder="Graphic designer" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Lien facebook"
                    name="lien-fb"
                    type="url" 
                    
                    pattern="https://.*"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le lien facebook!",
                      },
                    ]}
                  >
                    <Input placeholder="https://facebook.com/" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Lien linkedin"
                    name="lien-link"
                    type="url" 
                    
                    pattern="https://.*"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le lien linkedin!",
                      },
                    ]}
                  >
                    <Input placeholder="https://linkedin.com/" />
                  </Form.Item>
                  <Form.Item
                    className="username"
                    label="Lien linkedin"
                    name="lien-insta"
                    type="url" 
                    
                    pattern="https://.*"
                    rules={[
                      {
                        required: true,
                        message: "veuillez entrer le lien instagram!",
                      },
                    ]}
                  >
                    <Input placeholder="https://instagram.com/" />
                  </Form.Item>

                  <Form.Item>
                  <div className="uploadfile pb-15 shadow-none">
                <Upload {...formProps}
                 accept=".png"
                 beforeUpload={(file)=>{
                   console.log({file});
                   return false;}}
                   >
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div>
              </Form.Item>

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
      </>
    );
  }
}
