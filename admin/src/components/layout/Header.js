/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Input,
} from "antd";

import {
  SearchOutlined,
} from "@ant-design/icons";

import { NavLink, Link } from "react-router-dom";
// import styled from "styled-components";
import imageProfile from '../../assets/images/git.jpg';

// const ButtonContainer = styled.div`
//   .ant-btn-primary {
//     background-color: #1890ff;
//   }
//   .ant-btn-success {
//     background-color: #52c41a;
//   }
//   .ant-btn-yellow {
//     background-color: #fadb14;
//   }
//   .ant-btn-black {
//     background-color: #262626;
//     color: #fff;
//     border: 0px;
//     border-radius: 5px;
//   }
//   .ant-switch-active {
//     background-color: #1890ff;
//   }
// `;


const profile = [
  <img
    width="40"
    height="40"
    style={{ borderRadius: '19px', overflow: 'hidden', objectFit: 'cover' }}
    src={imageProfile}
  >

  </img>,
];


function Header({

  name,
  subName,
}) {
  // const { Title, Text } = Typography;

  // const [visible, setVisible] = useState(false);
  // const [sidenavType, setSidenavType] = useState("transparent");

  useEffect(() => window.scrollTo(0, 0));

  // const showDrawer = () => setVisible(true);
  // const hideDrawer = () => setVisible(false);

  return (
    <>

      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {/* {name.replace("/", "")} */}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {/* {subName.replace("/", "")} */}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          {profile}

          <Link to="/sign-in" className="btn-sign-in">
            <span>Sign out  </span>
          </Link>

          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
