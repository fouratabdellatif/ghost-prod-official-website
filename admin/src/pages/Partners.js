/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Avatar,
  Typography,
} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePartner, getPartners } from "../actions/partners";
import { useState } from "react";
import Tracker from "./Tracker";

const { Title } = Typography;

function Partners() {

  const partners = useSelector((state) => state.partners);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getPartners());
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

    return data.filter((partner) => {
      var partnerName = partner.name;
      return replaceAcc(partnerName.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(partners, searchQuery);

  const columns = [
    {
      title: 'Partenaire',
      dataIndex: 'partner',
      key: 'partner',
    },
    {
      title: 'Lien',
      dataIndex: 'link',
      key: 'link',
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
        partner: (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={40}
                src={`/uploads/${item?.imageFile}`}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>
                  {item?.name}
                </Title>
              </div>
            </Avatar.Group>{" "}
          </>
        ),
        link: (
          <>
            <div className="author-info">
              <Title level={5}>
                <a style={{
                  textDecoration: 'none',
                  color: '#000000'
                }}
                  href={`${item?.link}`}
                  target='_blank' rel="noreferrer"
                >
                  {item?.link}
                </a>
              </Title>
            </div>
          </>
        ),
        actions: (
          <div className="ant-employed">
            <a href={`/partner/${item._id}`}>Modifier</a>
            <a onClick={() => {
              dispatch(deletePartner(item._id))
            }}>Supprimer</a>
          </div>
        )
      })
  });

  return (
    <>
      <Tracker
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        label="Rechercher un partenaire"
        placeholder="Introduire le nom du partenaire"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Mes partenaires"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/partner">Ajouter un partenaire</a></Radio.Button>

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

export default Partners;
