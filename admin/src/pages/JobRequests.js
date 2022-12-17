/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Table,
  Typography,
  Button
} from "antd";
import {
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Tracker from "./Tracker";
// import { FaFileDownload } from 'react-icons/fa'
import { deleteReclamation, getWorkDMs } from "../actions/reclamations";

const { Title } = Typography;

function JobRequests() {

  const reclamations = useSelector((state) => state.reclamations);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getWorkDMs());
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

    return data.filter((job) => {
      var jobNum = job?.num;
      return replaceAcc(jobNum.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(reclamations, searchQuery);

  const columns = [
    {
      title: 'Candidature',
      dataIndex: 'job',
      key: 'job',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'N° Tél',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: 'CV',
    //   dataIndex: 'cv',
    //   key: 'cv',
    // },
    // {
    //   title: 'Type du contrat',
    //   dataIndex: 'category',
    //   key: 'category',
    // },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
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
        job: (
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
        // cv: (
        //   <>
        //     <div className="author-info">
        //       <Title level={5}>
        //       {item?.cv ? (
        //         <a href={item?.cv} download target='_blank' rel="noreferrer">
        //           <FaFileDownload />
        //         </a>
        //       ):(
        //         "pas de CV"
        //       )}
        //       </Title>
        //     </div>
        //   </>
        // ),
        // category: (
        //   <>
        //     <div className="author-info">
        //       <h6>{item?.category}</h6>
        //     </div>
        //   </>
        // ),
        message: (
          <>
            <div className="author-info">
              <h6>{item?.text}</h6>
            </div>
          </>
        ),
        actions: (
          <div className="ant-employed">
            <a onClick={async () => {
              await dispatch(deleteReclamation(item?._id))
              await dispatch(getWorkDMs());
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
        label="Rechercher une candidature"
        placeholder="Introduire le num de la candidature"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Candidatures"
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

export default JobRequests;
