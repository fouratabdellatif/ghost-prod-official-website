/* eslint-disable eqeqeq */
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
import { createMember, getMembers, updateMember } from "../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  LoadingOutlined
} from '@ant-design/icons';


const { Title } = Typography;
const { Content } = Layout;

const MemberForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(async () => {
    await dispatch(getMembers());
  }, [dispatch]);

  const membersData = useSelector((state) => state.members);

  let members = membersData.filter((item) => item?._id == id).map((item, index) => {
    return item;
  });

  const member = members[0];
  // console.log(member);

  const initState = id ? ({
    firstname: member?.firstname,
    lastname: member?.lastname,
    spec: member?.spec,
    city: member?.city,
    phone: member?.phone,
    email: member?.email,
    bio: member?.bio,
    profileImage: member?.profileImage,
    facebook: member?.facebook,
    instagram: member?.instagram,
    linkedin: member?.linkedin,
    behance: member?.behance,
  }) : ({
    firstname: '',
    lastname: '',
    spec: '',
    city: '',
    phone: '',
    email: '',
    bio: '',
    profileImage: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    behance: '',
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
    // console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      // console.log(formData);
      await setLoader(true);
      await dispatch(updateMember(id, formData));
      await setLoader(false);
    }
    else {
      await setLoader(true);
      await dispatch(createMember(formData));
      await setLoader(false);
    }
    await history.push('/equipe');
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
            <Title className="mb-15">Ajouter un membre</Title>
            <Title className="font-regular text-muted" level={5}>
              veuillez remplir ces champs pour ajouter un membre!
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
                      placeholder="First Name"
                      name="firstname"
                      onChange={handleChange}
                      defaultValue={member?.firstname}
                    />
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      onChange={handleChange}
                      defaultValue={member?.lastname}
                    />
                    <input
                      placeholder="Spécialité"
                      name="spec"
                      onChange={handleChange}
                      defaultValue={member?.spec}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input
                      placeholder="Ville"
                      name="city"
                      onChange={handleChange}
                      defaultValue={member?.city}
                    />
                    <input
                      placeholder="N° Tél"
                      name="phone"
                      onChange={handleChange}
                      defaultValue={member?.phone}
                    />
                    <input
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      defaultValue={member?.email}
                    />
                  </Space>
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
                    filename="profileImage"
                    onChange={(e) => {
                      // console.log(e.target.files[0])
                      setFormData({ ...formData, profileImage: e.target.files[0] })
                    }}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <textarea placeholder="Bio"
                    name="bio"
                    onChange={handleChange}
                    defaultValue={member?.bio}
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input placeholder="Facebook"
                      name="facebook"
                      onChange={handleChange}
                      defaultValue={member?.facebook}
                    />
                    <input
                      placeholder="Instagram"
                      name="instagram"
                      onChange={handleChange}
                      defaultValue={member?.instagram}
                    />
                  </Space>
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  lg={{ span: 7, offset: 2 }}
                  md={{ span: 12 }}
                >
                  <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <input
                      placeholder="Linkedin"
                      name="linkedin"
                      onChange={handleChange}
                      defaultValue={member?.linkedin}
                    />
                    <input
                      placeholder="Behance"
                      name="behance"
                      onChange={handleChange}
                      defaultValue={member?.behance}
                    />
                  </Space>
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
                        fill="#bf0000"
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

export default MemberForm
