/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Spin
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createCategory, getCategoryById, updateCategory } from "../../actions/categories";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


const { Title } = Typography;
const { Content } = Layout;

const CategoryForm = () => {

  const { id } = useParams();

  const { category } = useSelector((state) => state.categories);

  useEffect(async () => {
    if (id)
      await dispatch(getCategoryById(id));
  }, []);

  const initState = id ? ({
    name: category?.name,
    description: category?.description
  }) : ({
    name: '',
    description: ''
  })

  const [formData, setFormData] = useState(initState);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await setLoader(true);
      await dispatch(updateCategory(id, formData));
      await setLoader(false);
    }
    else {
      await setLoader(true);
      await setFormData(formData);
      await dispatch(createCategory(formData));
      await setLoader(false);
    }
    await history.push('/categories');
  }


  return (
    <Layout className="Form-layout layout-default">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 7, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Ajouter une catégorie</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter une catégorie!
            </Title>
            <form
              className="row-col"
              onSubmit={handleSubmit}
              encType="multiple/form-data"
            >
              <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input
                      placeholder="Nom"
                      name="name"
                      onChange={handleChange}
                      defaultValue={category?.name}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <textarea placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    rows={4}
                    defaultValue={category?.description}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  {loader ? (
                    <Spin indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 32,
                        }}
                        spin
                      />} />
                  ) : (
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      ENREGISTRER
                    </Button>
                  )}
                </Col>
              </Space>
            </form>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default CategoryForm
