/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Typography,
  Button
} from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReclamation, getFeedbacks } from "../actions/reclamations";
import { useState } from "react";
import Tracker from "./Tracker";
import { manageFeedback } from "../actions/reclamations";

const { Title } = Typography;

function Feedbacks() {

  const reclamations = useSelector((state) => state.reclamations);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getFeedbacks());
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

    return data.filter((feedback) => {
      var feedbackNum = feedback?.num;
      return replaceAcc(feedbackNum.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(reclamations, searchQuery);

  const columns = [
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      key: 'feedback',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Spec.',
      dataIndex: 'spec',
      key: 'spec',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
        key: `${item?._id}`,
        feedback: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.num}</Title>
            </div>
          </>
        ),
        name: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.name}</Title>
            </div>
          </>
        ),
        phone: (
          <>
            <div className="author-info">
            <Title level={5}>
              <a href={`tel:${item?.phone}`}>
                {item?.phone}
              </a>
            </Title>
            </div>
          </>
        ),
        email: (
          <>
            <div className="author-info">
              <Title level={5}>
                <a href={`mailto:${item?.email}`}>
                  {item?.email}
                </a>
              </Title>
            </div>
          </>
        ),
        spec: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.spec}</Title>
            </div>
          </>
        ),
        message: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.text}</Title>
            </div>
          </>
        ),
        status: (
          <>
            <div className="author-info">
              {item?.visible ? (
                <Title level={5}>Visible</Title>
              ) : (
                <Title level={5}>Not Visible</Title>
              )}
            </div>
          </>
        ),
        actions: (
          <div className="ant-employed">
            <a onClick={async () => {
              await dispatch(manageFeedback(item?._id))
              await dispatch(getFeedbacks());
            }}>
              <Button type="link" className="darkbtn">
                {item?.visible ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}

              </Button></a>
            <a onClick={async () => {
              await dispatch(deleteReclamation(item?._id))
              await dispatch(getFeedbacks());
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
        label="Rechercher un feedback"
        placeholder="Introduire le nom du feedback"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Nos feedbacks"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/feedback">Ajouter un feedback</a></Radio.Button>

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

export default Feedbacks;
