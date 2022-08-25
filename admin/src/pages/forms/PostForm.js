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
import { LoadingOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { createPost, getPostById, updatePost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


const { Title } = Typography;
const { Content } = Layout;

const PostForm = () => {

  const { id } = useParams();

  const { post } = useSelector((state) => state.posts);

  useEffect(async () => {
    if (id)
      await dispatch(getPostById(id));
  }, []);

  const [content, setContent] = useState([]);

  const initState = id ? ({
    category: post?.category,
    text: post?.text,
    content: post?.content,
    imageFile: post?.imageFile,
  }) : ({
    category: '',
    text: '',
    content: content,
    imageFile: '',
  })

  const [formData, setFormData] = useState(initState);
  const [loader, setLoader] = useState(false);

  let addContentFields = () => {
    setContent([...content, ""])
    setFormData({
      ...formData,
      content: content
    })
  }

  let removeContentFields = (i) => {
    let newFormValues = [...content];
    newFormValues.splice(i, 1);
    setContent(newFormValues)
    setFormData({
      ...formData,
      content: content
    })
  }

  const handleInputContentsChange = (index, event) => {
    const values = [...content];
    // const updatedValue = event.target.name;
    values[index] = event.target.value;

    setContent(values);
    setFormData({
      ...formData,
      content: content
    })

    // console.log("content", formData);
  };

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
      await dispatch(updatePost(id, formData));
      await setLoader(false);
    }
    else {
      await setLoader(true);
      await setFormData({
        ...formData,
        content: content,
      })
      await dispatch(createPost(formData));
      await setLoader(false);
    }
    await history.push('/posts');
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
            <Title className="mb-15">Ajouter un post</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un post!
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
                      placeholder="Catégorie"
                      name="category"
                      onChange={handleChange}
                      defaultValue={post?.category}
                    />
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
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <textarea placeholder="Texte"
                    name="text"
                    onChange={handleChange}
                    rows={4}
                    defaultValue={post?.text}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <label style={{
                    fontWeight: 700,
                  }}>Contenu</label>
                  {id ? post?.content?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="content"
                          placeholder={`Paragraphe N°${index + 1}`}
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
                  )) : content?.map((field, index) => (
                    <div className="form-inline" key={index}>
                      <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                        <input
                          name="content"
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

export default PostForm
