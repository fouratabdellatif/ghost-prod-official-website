import React, { useState } from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Spin,
  Collapse,
  Space,
  Col,
} from "antd";

import { useHistory } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateUserPassword, updateUserProfileData, updateUserProfilePicture } from "../actions/userProfile";
import { decoded } from "../api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Title } = Typography;
const { Header, Content } = Layout;
const { Panel } = Collapse;

export default function EditAccount() {

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const id = decoded?.id;

  const onFinishData = async (values) => {
    console.log('Received values of form: ', values);
    await setLoader(true);
    await dispatch(updateUserProfileData(values));
    await setLoader(false);
  };

  const onFinishPassword = async (values) => {
    console.log('Received values of form: ', values);
    await setLoader(true);
    await dispatch(updateUserPassword(values));
    await setLoader(false);
  };

  const initImageState = ({
    profilePicture: ""
  })

  const [formImageData, setFormImageData] = useState(initImageState);

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    await setLoader(true);
    await dispatch(updateUserProfilePicture(id, formImageData));
    await setLoader(false);
  }

  return (
    <>
      <ToastContainer />
      <div className="layout-default ant-layout layout-sign-up">
        <Header>
          <div className="header-col header-brand">
            <h5 onClick={() => history.goBack()} style={{
              cursor: 'pointer'
            }}>
              <ArrowLeftOutlined style={{ fontSize: '20px', color: '#ffffff' }} />
            </h5>
          </div>
        </Header>

        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Editer Compte</Title>
              <p className="text-lg">
                Editer les informations du compte...
              </p>
            </div>
          </div>


          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            // title={<h5>Type account details</h5>}
            bordered="false"
          >
            <Collapse accordion>
              <Panel header="Modifier les informations personnelles" key="1">
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinishData}
                  scrollToFirstError
                >
                  <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input firstname!',
                      },
                    ]}
                  >
                    <Input
                      defaultValue={decoded?.firstname}
                    />
                  </Form.Item>
                  <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input lastname!',
                      },
                    ]}
                  >
                    <Input
                      defaultValue={decoded?.lastname}
                    />
                  </Form.Item>
                  <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                      // {
                      //   type: 'email',
                      //   message: 'The input is not valid E-mail!',
                      // },
                      {
                        required: true,
                        message: 'Please input username!',
                      },
                    ]}
                  >
                    <Input
                      defaultValue={decoded?.username}
                    />
                  </Form.Item>

                  <Form.Item>
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
                        style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b" }}
                        type="primary"
                        htmlType="submit"
                      >
                        CONFIRMER
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </Panel>
              <Panel header="Modifier la photo" key="2">
                <form
                  className="row-col"
                  onSubmit={handleImageSubmit}
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
                          type='file'
                          accept='image/*'
                          // ref={inputRef}
                          filename="profilePicture"
                          onChange={(e) => {
                            console.log(e.target.files[0])
                            setFormImageData({ ...formImageData, profilePicture: e.target.files[0] })
                          }}
                        />
                      </Space>
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
                            fill="#bf0000"
                            spin
                          />} />
                      ) : (
                        <Button
                          style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b" }}
                          type="primary"
                          htmlType="submit"
                        >
                          CONFIRMER
                        </Button>
                      )}
                    </Col>
                  </Space>
                </form>
              </Panel>
              <Panel header="Modifier le mot de passe" key="3">
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinishPassword}
                  scrollToFirstError
                >
                  <Form.Item
                    name="password"
                    label="Mot de passe actuel"
                    rules={[
                      {
                        required: true,
                        message: 'Saisir votre mot de passe actuel!',
                      }
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="newPassword"
                    label="Nouveau mot de passe"
                    rules={[
                      {
                        required: true,
                        message: 'Saisir votre nouveau mot de passe!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="confirmNewPassword"
                    label="Confirmer mot de passe"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Vous devez confirmer votre mot de passe!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(new Error('Les deux mots de passe que vous avez saisis ne correspondent pas!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
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
                        style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b" }}
                        type="primary"
                        htmlType="submit"
                      >
                        CHANGER MOT DE PASSE
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </Panel>
            </Collapse>
          </Card>
        </Content>

        <Footer />
      </div>
    </>
  );
}
