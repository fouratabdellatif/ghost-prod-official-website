import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Spin,
  // Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.png";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/auth";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Content } = Layout;

export default function SignIn() {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const onFinish = async (values) => {
    // console.log('Received values of form: ', values);
    await setLoader(true);
    await dispatch(signIn(values));
    await setLoader(false);
  }

  return (
    <>
      <Layout className="layout-default layout-signin">

        <Content className="signin">
          <Row gutter={[24, 0]} className="ant-row-6" justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your credentials
              </Title>
              <Form
                layout="vertical"
                className="row-col"
                form={form}
                name="login"
                onFinish={onFinish}
                scrollToFirstError
              >
                <Form.Item
                  className="username"
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>

                {/* <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >
                  <Switch defaultChecked onChange={onChange} />
                  Remember me
                </Form.Item> */}

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", backgroundColor: '#e1a33b', borderColor: "#e1a33b", color: "#ffffff" }}
                    disabled={loader}
                  >
                    {loader && (
                      <Spin indicator={
                        <LoadingOutlined
                          style={{
                            fontSize: 22,
                            color: "#ffffff",
                            marginRight: '20px'
                          }}
                          spin
                        />} />
                    )}
                    SIGN IN
                  </Button>
                </Form.Item>
                {/* <p className="font-semibold text-muted">
                    Don't have an account?{" "}
                    <Link to="/add-account" className="text-dark font-bold">
                      Sign Up
                    </Link>
                  </p> */}
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>

      </Layout>
    </>
  );
}
