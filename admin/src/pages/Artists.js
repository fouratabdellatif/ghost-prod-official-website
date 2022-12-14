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
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtist, getArtists } from "../actions/artists";
import { useState } from "react";
import Tracker from "./Tracker";
import AudioPlayer from 'react-h5-audio-player';
import '../assets/css/AudioPlayer.css';

const { Title } = Typography;

function Artists() {

  const artists = useSelector((state) => state.artists);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getArtists());
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

    return data.filter((artist) => {
      var artistName = `${artist.firstname} ${artist.lastname}`;
      return replaceAcc(artistName.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(artists, searchQuery);

  const columns = [
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist',
    },
    {
      title: 'Nom & Prénom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Langues',
      dataIndex: 'langs',
      key: 'langs',
    },
    {
      title: 'Audios',
      dataIndex: 'audioLists',
      key: 'audioLists',
    },
    {
      title: 'Ville',
      dataIndex: 'city',
      key: 'city',
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
        artist: (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={40}
                src={item?.imageFile}
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}>{item?.numRef}</Title>

              </div>
            </Avatar.Group>{" "}
          </>
        ),
        name: `${item?.firstname} ${item?.lastname}`,
        langs: (
          <>
            <div className="author-info">
              <ul>
                {item?.langs?.map((lang, index) => (
                  <li>
                    <Title level={5}>{lang}</Title>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ),
        audioLists: (
          <>
            <div className="author-info">
              <ul style={{
                listStyle: 'none'
              }}>
                {item?.audioLists?.map((audio, index) => (
                  <li>
                    <>
                      <Title level={5}>{audio?.name}</Title>
                      <AudioPlayer
                        // autoPlay
                        src={audio?.musicSrc}
                        style={{ marginBottom: '20px' }}
                      />
                    </>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ),
        city: `${item?.city}`,
        phone: `${item?.phone}`,
        email: `${item?.email}`,
        social: (
          <>
            <div className="ant-employed">
              <span>
                <Descriptions >
                  <Descriptions.Item span={3}>
                    {item.linkedin && (
                      <a href={`${item?.linkedin}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<LinkedinOutlined />}
                      </a>
                    )}
                    {item.facebook && (
                      <a href={`${item?.facebook}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<FacebookOutlined style={{ color: "#344e86" }} />}
                      </a>
                    )}
                    {item.instagram && (
                      <a href={`${item?.instagram}`} target='_blank' className="mx-5 px-5" rel="noreferrer">
                        {<InstagramOutlined style={{ color: "#e1306c" }} />}
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
            <a href={`/voice-over-artist/${item?._id}`}>
              <Button type="link" className="darkbtn">
                <EditOutlined />
              </Button></a>
            <a onClick={() => {
              dispatch(deleteArtist(item?._id))
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
        label="Rechercher un artiste"
        placeholder="Introduire le nom du artiste"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Mes Artistes (Voice-Over)"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/voice-over-artist">Ajouter un artiste</a></Radio.Button>

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

export default Artists;
