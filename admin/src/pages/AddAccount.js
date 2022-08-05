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

const { Title } = Typography;
const { Header, Content } = Layout;

export default function AddAccount() {

  const history = useHistory();

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
            </Form>
          </Card>
        </Content>

        <Footer />
      </div>
    </>
  );
}
