import React from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
} from "antd";

import { useHistory } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/auth";

const { Title } = Typography;
const { Header, Content } = Layout;

export default function AddAccount() {

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

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    dispatch(addUser(values));
  };

  return (
    <>
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
              <Title>Add Account</Title>
              <p className="text-lg">
                Add another admin account...
              </p>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Type account details</h5>}
            bordered="false"
          >
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
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
                <Input />
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
                <Input />
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
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b" }}
                  type="primary"
                  htmlType="submit"
                >
                  ADD ACCOUNT
                </Button>
              </Form.Item>
            </Form>
            {/* <Form
              name="basic"
              initialValues={{ remember: true }}
              className="row-col"
            >
              <Form.Item
                name="Name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="Passwoed" />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b" }}
                  type="primary"
                  htmlType="submit"
                >
                  ADD ACCOUNT
                </Button>
              </Form.Item>
            </Form> */}
          </Card>
        </Content>

        <Footer />
      </div>
    </>
  );
}
