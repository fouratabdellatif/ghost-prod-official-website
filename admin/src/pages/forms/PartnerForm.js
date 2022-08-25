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
import { createPartner, getPartnerById, updatePartner } from "../../actions/partners";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";


const { Title } = Typography;
const { Content } = Layout;

const PartnerForm = () => {

  const { id } = useParams();

  const { partner } = useSelector((state) => state.partners);

  useEffect(async () => {
    if (id)
      await dispatch(getPartnerById(id));
  }, []);

  const initState = id ? ({
    name: partner?.name,
    link: partner?.link,
    imageFile: partner?.imageFile,
  }) : ({
    name: '',
    link: '',
    imageFile: '',
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
    // console.log('formData', formData);
    // console.log('value', value);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await setLoader(true);
      await dispatch(updatePartner(id, formData));
      await setLoader(false);
    }
    else {
      await setLoader(true);
      await dispatch(createPartner(formData));
      await setLoader(false);
    }
    await history.push('/partners');
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
            <Title className="mb-15">Ajouter un partenaire</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un partenaire!
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
                      placeholder="Nom du partenaire"
                      name="name"
                      onChange={handleChange}
                      defaultValue={partner?.name}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <input placeholder="Lien"
                    name="link"
                    onChange={handleChange}
                    rows={4}
                    defaultValue={partner?.link}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <input
                    type='file'
                    accept='image/*'
                    // ref={inputRef}
                    filename="imageFile"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, imageFile: e.target.files[0] })
                    }}
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

export default PartnerForm
