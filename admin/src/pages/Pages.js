/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPages } from "../actions/pages.js";
import PageForm from "./forms/PageForm";

function Pages() {

  const pages = useSelector((state) => state.pages);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getPages());
  }, []);

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Pages"
          >
            <PageForm
              name="about-us"
              pageName="À Propos"
              data={pages}
            />
            <PageForm
              name="services"
              pageName="Services"
              data={pages}
            />
            <PageForm
              name="blog"
              pageName="Blog"
              data={pages}
            />
            <PageForm
              name="contact-us"
              pageName="Contact"
              data={pages}
            />
            <PageForm
              name="team"
              pageName="Team"
              data={pages}
            />
            <PageForm
              name="projects"
              pageName="Réalisations"
              data={pages}
            />
            <PageForm
              name="voice-over"
              pageName="Voice-Over"
              data={pages}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Pages;
