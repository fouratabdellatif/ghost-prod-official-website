/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Descriptions,
  Avatar,
  Typography,
  Button,
} from "antd";
import {
  BehanceOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMember, getMembers } from "../actions/members";
import { useState } from "react";
import Tracker from "./Tracker";

const { Title } = Typography;

function Members() {

  const members = useSelector((state) => state.members);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getMembers());
  }, []);

  function replaceAcc(str) {
    return str
      .replace(/[àáâãäå]/g, "a")
      .replace(/[èéêë]/g, "e")
      .replace(/[^a-z0-9]/gi, '');
  }

  const filterData = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((member) => {
      var memberName = `${member.firstname} ${member.lastname}`;
      return replaceAcc(memberName.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(members, searchQuery);

  const columns = [
    {
      title: 'Member',
      dataIndex: 'member',
      key: 'member',
    },
    {
      title: 'Speciality',
      dataIndex: 'spec',
      key: 'spec',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Social Media',
      dataIndex: 'social',
      key: 'social',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  const dataSource = filteredData?.map((item, index) => {
    return (
      {
        key: `${item._id}`,
        member: (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={40}
                src={item.profileImage}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>{item.firstname} {item.lastname}</Title>

              </div>
            </Avatar.Group>{" "}
          </>
        ),
        spec: (
          <>
            <div className="author-info">
              <Title level={5}>{item.spec}</Title>
              <p>GhostProd</p>
            </div>
          </>
        ),
        city: `${item.city}`,
        phone: `${item.phone}`,
        social: (
          <>
            <div className="ant-employed">
              <span>
                <Descriptions >
                  <Descriptions.Item span={3}>
                    {item.linkedin && (
                      <a href={`${item.linkedin}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<LinkedinOutlined />}
                      </a>
                    )}
                    {item.facebook && (
                      <a href={`${item.facebook}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<FacebookOutlined style={{ color: "#344e86" }} />}
                      </a>
                    )}
                    {item.instagram && (
                      <a href={`${item.instagram}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<InstagramOutlined style={{ color: "#e1306c" }} />}
                      </a>
                    )}
                    {item.behance && (
                      <a href={`${item.behance}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<BehanceOutlined style={{ color: "#e1306c" }} />}
                      </a>
                    )}
                  </Descriptions.Item>
                </Descriptions>
              </span>
            </div>
          </>
        ),
        actions: (
          <div className="ant-employed">
            <a href={`/member/${item._id}`}>
              <Button type="link" className="darkbtn">
                <EditOutlined />
              </Button></a>
            <a onClick={() => {
              dispatch(deleteMember(item._id))
            }}>
              <Button type="link" danger>
                <DeleteOutlined />
              </Button></a>
          </div>
        )
      })
  });

  return (
    <>
      <Tracker
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        label="Rechercher un membre"
        placeholder="Introduire le nom du membre"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Mon équipe"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/member">Ajouter un membre</a></Radio.Button>

                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>


          </Col>
        </Row>
      </div>
    </>
  );
}

export default Members;
