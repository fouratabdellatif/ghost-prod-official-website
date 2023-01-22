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
import { deleteCategory, getCategories } from "../actions/categories";
import { useState } from "react";
import Tracker from "./Tracker";

const { Title } = Typography;

function Categories() {

  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getCategories());
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

    return data.filter((category) => {
      var categoryName = category.name;
      return replaceAcc(categoryName.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(categories, searchQuery);

  const columns = [
    {
      title: 'Catégorie',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
        category: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.name}</Title>
            </div>
          </>
        ),
        description: (
          <>
            <div className="author-info">
              <Title level={5}>{item?.description}</Title>
            </div>
          </>
        ),
        actions: (
          <>
            <div className="ant-employed">
              <a href={`/categorie/${item._id}`}>
                <Button type="link" className="darkbtn">
                  <EditOutlined />
                </Button></a>
              <a onClick={() => {
                dispatch(deleteCategory(item._id))
              }}>
                <Button type="link" danger>
                  <DeleteOutlined />
                </Button></a>
            </div>
          </>
        )
      })
  });

  return (
    <>
      <Tracker
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        label="Rechercher une catégorie"
        placeholder="Introduire le nom de la catégorie"
      />
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Nos catégories"
              extra={
                <>
                  <Radio.Group defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/categorie">Ajouter une catégorie</a></Radio.Button>

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

export default Categories;
