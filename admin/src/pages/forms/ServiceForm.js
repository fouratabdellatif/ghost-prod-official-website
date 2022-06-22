/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Space
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { createService, getServiceById, updateService } from "../../actions/services";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


const { Title } = Typography;
const { Content } = Layout;

const ServiceForm = () => {

  const { id } = useParams();

  const { service } = useSelector((state) => state.services);

  useEffect(async () => {
    if (id)
      await dispatch(getServiceById(id));
  }, []);

  const [steps, setSteps] = useState([]);

  const initState = id ? ({
    title: service?.title,
    quote: service?.quote,
    text: service?.text,
    steps: service?.steps
  }) : ({
    title: '',
    quote: '',
    text: '',
    steps: steps
  })

  const [formData, setFormData] = useState(initState);

  let addContentFields = () => {
    setSteps([...steps, ""])
    setFormData({
      ...formData,
      steps: steps
    })
  }

  let removeContentFields = (i) => {
    let newFormValues = [...steps];
    newFormValues.splice(i, 1);
    setSteps(newFormValues)
    setFormData({
      ...formData,
      steps: steps
    })
  }

  const handleInputContentsChange = (index, event) => {
    const values = [...steps];
    values[index] = event.target.value;

    setSteps(values);
    setFormData({
      ...formData,
      steps: steps
    })
  };

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
    if (id)
      await dispatch(updateService(id, formData));
    else {
      await setFormData({
        ...formData,
        steps: steps,
      })
      await dispatch(createService(formData));
    }
    // await history.push('/services');
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
            <Title className="mb-15">Ajouter un service</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un service!
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
                      placeholder="Titre"
                      name="title"
                      onChange={handleChange}
                      defaultValue={service?.title}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                <textarea placeholder="Quote"
                  name="quote"
                  onChange={handleChange}
                  rows={4}
                  defaultValue={service?.quote}
                />
                  <textarea placeholder="Texte"
                    name="text"
                    onChange={handleChange}
                    rows={4}
                    defaultValue={service?.text}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <label style={{
                    fontWeight: 700,
                  }}>Steps</label>
                  {id ? service?.steps?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="steps"
                          placeholder={`Step N°${index + 1}`}
                          onChange={(event) => {
                            handleInputContentsChange(index, event)
                          }}
                          defaultValue={field}
                        />
                        {
                          index ?
                            <button type="button" className="button remove" onClick={() => removeContentFields(index)}>
                              <MinusOutlined />
                            </button>
                            : null
                        }
                      </Space>
                    </div>
                  )) : steps?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="steps"
                          placeholder={`Paragraphe N°${index + 1}`}
                          onChange={(event) => {
                            handleInputContentsChange(index, event)
                          }}
                          defaultValue=""
                        />
                        {
                          index ?
                            <button type="button" className="button remove" onClick={() => removeContentFields(index)}>
                              <MinusOutlined />
                            </button>
                            : null
                        }
                      </Space>
                    </div>))}
                  <div className="button-section">
                    <button className="button add" type="button" onClick={() => addContentFields()}>
                      <PlusOutlined />
                    </button>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    AJOUTER
                  </Button>
                </Col>
              </Space>
            </form>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default ServiceForm
