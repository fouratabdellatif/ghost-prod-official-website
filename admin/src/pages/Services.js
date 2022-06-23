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
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, getServices } from "../actions/services";
import { useState } from "react";
import Tracker from "./Tracker";

const { Title } = Typography;

function Services() {

  const services = useSelector((state) => state.services);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getServices());
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

    return data.filter((service) => {
      var serviceTitle = service.title;
      return replaceAcc(serviceTitle.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(services, searchQuery);

  const columns = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Quote',
      dataIndex: 'quote',
      key: 'quote',
    },
    {
      title: 'Paragraphe',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Steps',
      dataIndex: 'steps',
      key: 'steps',
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
        service: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.title}</Title>
            </div>
          </>
        ),
        quote: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.quote}</Title>
            </div>
          </>
        ),
        text: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.text}</Title>
            </div>
          </>
        ),
        steps: (
          <>
            <div className="author-info">
              <ul>
                {item?.steps?.map((step, index) => (
                  <li>
                    <Title level={5}>{step}</Title>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ),
        actions: (
          <div className="ant-employed">
            <a href={`/service/${item._id}`}>
              <Button type="link" className="darkbtn">
                <EditOutlined />
              </Button></a>
            <a onClick={() => {
              dispatch(deleteService(item._id))
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
        label="Rechercher un projet"
        placeholder="Introduire le nom du projet"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Nos services"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/service">Ajouter un service</a></Radio.Button>

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

export default Services;
