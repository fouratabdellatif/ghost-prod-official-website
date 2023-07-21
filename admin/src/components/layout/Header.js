/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Space,
  // Input,
} from "antd";

// import {
//   SearchOutlined,
// } from "@ant-design/icons";

import { NavLink, Link, useHistory } from "react-router-dom";
// import styled from "styled-components";
import imageProfile from '../../assets/images/profileImage.png';
import { useDispatch } from "react-redux";
import { decoded } from "../../api";

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

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const profile = [
    <Link
      to='/editer-info'
      style={{
        cursor: 'pointer'
      }}
    >
      <img
        width="45"
        height="45"
        style={{ borderRadius: '4px', overflow: 'hidden', objectFit: 'cover' }}
        src={decoded?.profilePicture ? decoded?.profilePicture : imageProfile}
      >
      </img>
    </Link>
  ];


  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/sign-in");
    setUser(null);
  };

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
          <Space>

            {decoded?.role[0] === "superAdmin" &&
              <Link to="/ajouter-compte" className="btn-sign-in">
                <span>Ajouter Compte</span>
              </Link>
            }

            {profile}

            <a onClick={logout} className="btn-sign-in">
              <span>Sign out</span>
            </a>

          </Space>
          {/* <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          /> */}



        </Col>
      </Row>
    </>
  );
}

export default Header;
